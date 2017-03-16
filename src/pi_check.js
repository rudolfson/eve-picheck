const Rx = require('rxjs/Rx'); // do all the things
const moment = require('moment');

const EveClient = require('./eve').EveClient;

let client = new EveClient();
client.authorize(['esi-planets.manage_planets.v1'])
    .mergeMap(characterId => client.getPlanets())
    .mergeMap(planets => client.getColonyLayout(planets))
    .mergeMap(layout => layout.pins )
    .filter(pin => pin.hasOwnProperty('expiry_time'))
    .pluck('expiry_time')
    .subscribe(
        result => {
            let expiry = moment(result);
            let now = moment();
            let diff = moment.duration(expiry.diff(now));
            console.log(diff.humanize(true));
        },
        error => {
            console.error(error);
            process.exit();
        },
        obj => process.exit()
    );

