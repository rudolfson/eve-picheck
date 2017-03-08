const Rx = require('rxjs/Rx');
const requestify = require('requestify');

let charId = Rx.Observable.fromPromise(requestify.get('https://esi.tech.ccp.is/latest/characters/names/?character_ids=93322824,93445913&datasource=tranquility'));
charId = charId.concatMap(response => response.getBody());

function getPublicInfo(characterId) {
    let observable = Rx.Observable.fromPromise(requestify.get(`https://esi.tech.ccp.is/latest/characters/${characterId}/?datasource=tranquility`));
    return observable.map(response => response.getBody());
}

let chain = charId.pluck('character_id').concatMap(id => getPublicInfo(id)).pluck('birthday');
chain.subscribe(result => console.log(`result is `, result), err => console.error(err));

