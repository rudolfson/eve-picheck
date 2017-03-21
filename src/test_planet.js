const Rx = require('rxjs/Rx'); // do all the things
const moment = require('moment');
const util = require('util');

const EveClient = require('./eve').EveClient;

let client = new EveClient();
client.authorize(['esi-planets.manage_planets.v1'])
    .mergeMap(verification => client.getPlanets())
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
    .subscribe(
        result => console.log(util.inspect(result, {depth: null, colors: true})),
        error => {
            console.error(error);
            process.exit();
        },
        obj => process.exit()
    );

