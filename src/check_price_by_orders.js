const Rx = require('rxjs/Rx'); // do all the things
const EveClient = require('./eve').EveClient;
const moment = require('moment');
const util = require('util');

const PERCENTILE = 5;
let client = new EveClient();
/*
 Jita 30000142
 The Forge 10000002
 Jita 4-4 60003760
 Supertensile Plastics 2312
 */

let percentile =

client.getMarketsOrders(10000002, 2312)
    .mergeMap(result =>
            Rx.Observable.from(result)
                .reduce((agg, curr) => {
                        if (curr.is_buy_order === true) {
                            if (agg.buyTotalVolume == 0) {
                                agg.buyAveragePrice = curr.price;
                                agg.buyTotalVolume = curr.volume_remain;
                            } else {
                                agg.buyAveragePrice =
                                    (agg.buyTotalVolume * agg.buyAveragePrice + curr.volume_remain * curr.price)
                                    / (agg.buyTotalVolume + curr.volume_remain);
                                agg.buyTotalVolume += curr.volume_remain;
                            }
                            agg.buyHighest = Math.max(curr.price, agg.buyHighest);
                            agg.buyLowest = Math.min(curr.price, agg.buyLowest);
                        } else {
                            if (agg.sellTotalVolume == 0) {
                                agg.sellAveragePrice = curr.price;
                                agg.sellTotalVolume = curr.volume_remain;
                            } else {
                                agg.sellAveragePrice =
                                    (agg.sellTotalVolume * agg.sellAveragePrice + curr.volume_remain * curr.price)
                                    / (agg.sellTotalVolume + curr.volume_remain);
                                agg.sellTotalVolume += curr.volume_remain;
                            }
                            agg.sellHighest = Math.max(curr.price, agg.sellHighest);
                            agg.sellLowest = Math.min(curr.price, agg.sellLowest);
                        }
                        return agg;
                    },
                    {
                        buyTotalVolume: 0,
                        buyAveragePrice: 0,
                        buyHighest: 0,
                        buyLowest: Number.MAX_SAFE_INTEGER,
                        sellTotalVolume: 0,
                        sellAveragePrice: 0,
                        sellHighest: 0,
                        sellLowest: Number.MAX_SAFE_INTEGER,
                    }),
        (orders, aggregate) => {
            return {
                buyOrders: orders.filter(item => item.is_buy_order === true).sort((a,b) => b.price - a.price),
                sellOrders: orders.filter(item => item.is_buy_order === false).sort((a, b) => a.price - b.price),
                aggregate: aggregate
            }
        }
    )
    .subscribe(
        result => console.log(result),
        error => console.error(error),
        obj => {
            if (obj) console.log(obj);
            process.exit();
        }
    );
