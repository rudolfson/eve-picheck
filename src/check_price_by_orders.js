const Rx = require('rxjs/Rx'); // do all the things
const EveClient = require('./eve').EveClient;
const moment = require('moment');
const util = require('util');

let client = new EveClient();
/*
 Jita 30000142
 The Forge 10000002
 Jita 4-4 60003760
 Supertensile Plastics 2312
 */
client.getMarketsOrders(10000002, 2312)
    .mergeMap(result => Rx.Observable.from(result))
    .reduce((acc, curr) => {
            if (curr.is_buy_order === true) {
                if (acc.buyTotalVolume == 0) {
                    acc.buyAveragePrice = curr.price;
                    acc.buyTotalVolume = curr.volume_remain;
                } else {
                    acc.buyAveragePrice =
                        (acc.buyTotalVolume * acc.buyAveragePrice + curr.volume_remain * curr.price)
                        / (acc.buyTotalVolume + curr.volume_remain);
                    acc.buyTotalVolume += curr.volume_remain;
                }
                acc.buyHighest = Math.max(curr.price, acc.buyHighest);
                acc.buyLowest = Math.min(curr.price, acc.buyLowest);
            } else {
                if (acc.sellTotalVolume == 0) {
                    acc.sellAveragePrice = curr.price;
                    acc.sellTotalVolume = curr.volume_remain;
                } else {
                    acc.sellAveragePrice =
                        (acc.sellTotalVolume * acc.sellAveragePrice + curr.volume_remain * curr.price)
                        / (acc.sellTotalVolume + curr.volume_remain);
                    acc.sellTotalVolume += curr.volume_remain;
                }
                acc.sellHighest = Math.max(curr.price, acc.sellHighest);
                acc.sellLowest = Math.min(curr.price, acc.sellLowest);
            }
            return acc;

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
        })
    .subscribe(
        result => console.log(result),
        error => console.error(error),
        obj => {
            if (obj) console.log(obj);
            process.exit();
        }
    );
