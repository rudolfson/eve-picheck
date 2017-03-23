const Rx = require('rxjs/Rx'); // do all the things
const moment = require('moment');
require('moment-duration-format');
const util = require('util');
const chalk = require('chalk');
const EveClient = require('./eve').EveClient;

// prepare input values
let thresholdStr = process.argv.length >= 3 ? process.argv[2] : '1 00:00';
let threshold = moment.duration(thresholdStr);
if (threshold.asMilliseconds() === 0) {
    threshold = moment.duration('1 00:00');
}
console.log(`Checking for expiration in under ${threshold.format()}`);

// start connecting and reading data
let client = new EveClient();
client.authorize(['esi-planets.manage_planets.v1'])
    .mergeMap(verification => {
        console.log(`Authenticated as ${verification.CharacterName} (${verification.CharacterID})`);
        return client.getPlanets();
    })
    .mergeMap(planets => Rx.Observable.from(planets))
    .mergeMap(
        planet => Rx.Observable.zip(
            client.getPlanet(planet.planet_id),
            client.getColonyLayout(planet),
            (planetInfo, colonyLayout) => {
                return {
                    planetInfo: planetInfo,
                    colonyLayout: colonyLayout
                }
            }),
        (outerValue, innerValue) => {
            return {
                planet: outerValue,
                planetInfo: innerValue.planetInfo,
                colonyLayout: innerValue.colonyLayout
            }
        }
    )
    .mergeMap(
        planetWithLayout => Rx.Observable.from(planetWithLayout.colonyLayout.pins)
            .filter(pin => pin.hasOwnProperty('expiry_time'))
            .pluck('expiry_time')
            .map(expiryTime => {
                let expiry = moment(expiryTime);
                let now = moment();
                let diff = expiry.diff(now);
                return moment.duration(diff);
            }),
        (outerValue, innerValue) => {
            outerValue.expiry = innerValue;
            return outerValue;
        }
    )
    .subscribe(
        result => {
            let expiryStr = result.expiry < 0 ? 'depleted!' : result.expiry.format('d[d] h[h] m[m]');
            let line = `${result.planetInfo.name} - ${expiryStr}`;
            if (result.expiry <= 0) {
                line = chalk.bgRed.bold(`* ${line}`);
            } else if (result.expiry < threshold) {
                line = chalk.red(`* ${line}`);
            } else {
                line = chalk.green.dim(line);
            }
            console.log(line);
        },
        error => {
            console.error(error);
            process.exit();
        },
        obj => process.exit()
    );

