const Rx = require('rxjs/Rx'); // do all the things
const EveClient = require('./eve').EveClient;
const moment = require('moment');
const util = require('util');

let client = new EveClient();
/*
 Jita 30000142
 The Forge 10000002
 Supertensile Plastics 2312
 */
let threshold = moment().subtract(10, 'days').startOf('day');
console.log(threshold);
client.getMarketsHistory(10000002, 2312)
    .mergeMap(result => Rx.Observable.from(result))
    .filter(entry => {
        let date = moment(entry.date);
        return date.isSameOrAfter(threshold);
    })
    .reduce((acc, curr) => {
            if (curr.highest >= 0) {
                acc.highestCount++;
                acc.highest += curr.highest;
            }
            if (curr.lowest >= 0) {
                acc.lowestCount++;
                acc.lowest += curr.lowest;
            }
            return acc;
        },
        {
            highestCount: 0,
            highest: 0,
            lowestCount: 0,
            lowest: 0
        })
    .map(acc => {
        return {
            highest: acc.highest / acc.highestCount,
            lowest: acc.lowest / acc.lowestCount
        }
    })
    .subscribe(
        result => console.log(result),
        error => console.error(error),
        obj => {
            if (obj) console.log(obj);
            process.exit();
        }
    );
