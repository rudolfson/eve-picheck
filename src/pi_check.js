const url = require('url'); // build URL to open browser with
const opn = require('opn'); // start system process to open browser
const requestify = require('requestify'); // external REST calls
const express = require('express'); // start local server for redirect after EVE authentication
const fs = require('fs'); // read config
const Rx = require('rxjs/Rx'); // do all the things
const crypto = require('crypto'); // generate random state for OAuth2

const AUTH_BASE = 'https://login.eveonline.com/oauth';
const API_BASE = 'https://esi.tech.ccp.is/latest';

/**
 * Authorize the given scope against the EVE SSO by asking the user.
 *
 * @param scope array of scopes to authorize
 * @returns an observable
 */
function authorize(scopes) {
    // register awaiting authentication
    let registration = registerState();
    // open browser
    let authUrl = new url.URL(`${AUTH_BASE}/authorize`);
    let search = new url.URLSearchParams();
    search.append('response_type', 'code');
    search.append('redirect_uri', 'http://localhost:7070/callback');
    search.append('client_id', config.clientId);
    search.append('scope', scopes.join(' '));
    search.append('state', registration.state);
    authUrl.search = search;
    opn(authUrl.toString(), {app: ['chrome', '--incognito']});
    return registration.observable;
}

/**
 * After authentication we need to fetch an access token.
 * @param authorizationCode
 * @returns an observable
 */
function getAccessToken(authorizationCode) {
    return Rx.Observable.fromPromise(
        requestify.post(`${AUTH_BASE}/token`, {
            grant_type: 'authorization_code',
            code: authorizationCode
        }, {
            auth: {username: config.clientId, password: config.clientSecret},
            dataType: 'form-url-encoded'
        })).map(response => response.getBody());
}

/**
 * Create and register a unique state for identifying the concrete authentication
 */
function registerState() {
    let state = crypto.pseudoRandomBytes(20).toString('hex');
    while (awaitingAuthentication[state] !== undefined) {
        state = crypto.pseudoRandomBytes(20).toString('hex');
    }
    let observable = Rx.Observable.create(observer => awaitingAuthentication[state] = observer);
    return {state: state, observable: observable};
}

/**
 * Unregister the state.
 * @param state
 * @param authenticationCode
 */
function notify(state, authenticationCode) {
    if (!isAwaitingAuthentication(state)) {
        throw new Error(`No state registered for ${state}`);
    }
    let observer = awaitingAuthentication[state];
    delete awaitingAuthentication[state];
    observer.next(authenticationCode);
    observer.complete();
}

/**
 * Check whether we have an authentication request for the state.
 * @param state
 * @returns {boolean}
 */
function isAwaitingAuthentication(state) {
    return awaitingAuthentication[state] !== undefined;
}

function callEsiApi(url, authorization) {
    return Rx.Observable.fromPromise(
        requestify.get(`${API_BASE}${url}`, {
            headers: {
                Authorization: `${authorization.token_type} ${authorization.access_token}`
            }
        }));
}

function callAuthApi(url, authorization) {
    return Rx.Observable.fromPromise(
        requestify.get(`${AUTH_BASE}${url}`, {
            headers: {
                Authorization: `${authorization.token_type} ${authorization.access_token}`
            }
        }));
}

/**
 * Query the character id from ESI.
 * @param authorization
 * @returns {*|Observable<T>}
 */
function getCharacterID(authorization) {
    return callAuthApi('/verify', authorization)
        .map(data => {
            return {authorization: authorization, payload: data.getBody().CharacterID}
        });
}

function getPlanets(authorization, characterId) {
    return callEsiApi(`/characters/${characterId}/planets/`, authorization)
        .map(data => {
            return {authorization: authorization, payload: data.getBody()}
        });
}

function getColonyLayout(authorization, planets) {
    return Rx.Observable.from(planets)
        .mergeMap(planet => callEsiApi(`/characters/${planet.owner_id}/planets/${planet.planet_id}/`, authorization))
        .map(data => {
            return {authorization: authorization, payload: data.getBody()}
        });
}

//
// M A I N
//

const config = JSON.parse(fs.readFileSync(`${process.env['HOME']}/.esi.json`, 'utf8'));

let awaitingAuthentication = {};

// start the callback server
const authenticationCallbackServer = express();
authenticationCallbackServer.get('/callback', (callbackRequest, callbackResponse) => {
    // check if we are waiting for an authentication for the given request
    let state = callbackRequest.query.state;
    if (!isAwaitingAuthentication(state)) {
        callbackResponse.redirect(302, 'https://http.cat/400');
        return;
    }
    let authorizationCode = callbackRequest.query.code;
    notify(state, authorizationCode);
    callbackResponse.send('Ok');
});
authenticationCallbackServer.listen(7070);


/// PI stuff
authorize(['esi-planets.manage_planets.v1'])
    .mergeMap(authenticationCode => getAccessToken(authenticationCode))
    .mergeMap(authorization => getCharacterID(authorization))
    .mergeMap(result => getPlanets(result.authorization, result.payload))
    .mergeMap(result => getColonyLayout(result.authorization, result.payload))
    .subscribe(
        result => console.log(result.payload),
        error => {
            console.error(error);
            process.exit();
        },
        obj => process.exit());
