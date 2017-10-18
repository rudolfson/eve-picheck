/*
 * Javascript module for accessing the EVE ESI API
 */

'use strict';
const url = require('url'); // build URL to open browser with
const opn = require('opn'); // start system process to open browser
const os = require('os'); // check for os to determine browser command
const requestify = require('requestify'); // external REST calls
const express = require('express'); // start local server for redirect after EVE authentication
const Rx = require('rxjs/Rx'); // do all the things
const crypto = require('crypto'); // generate random state for OAuth2

const AUTH_BASE = 'https://login.eveonline.com/oauth';
const API_BASE = 'https://esi.tech.ccp.is/latest';

/**
 * Make a call to the EsiApi.
 *
 * @param url
 * @param authorizationNeeded
 * @param params
 * @returns {Observable<T>|*}
 */
function callEsiApi(url, authorizationNeeded = true, params = {}) {
    let headers = {};
    if (authorizationNeeded === true) {
        headers.Authorization = `${this.authorization.token_type} ${this.authorization.access_token}`;
    }
    return Rx.Observable.fromPromise(
        requestify.get(`${API_BASE}${url}`, {
            headers: headers,
            params: params
        })).map(response => {
            return response.getBody();
        });
}

/**
 * Make a call to EVE SSO API.
 *
 * @param url
 * @returns {Observable<T>|*}
 */
function callAuthApi(url) {
    return Rx.Observable.fromPromise(
        requestify.get(`${AUTH_BASE}${url}`, {
            headers: {
                Authorization: `${this.authorization.token_type} ${this.authorization.access_token}`
            }
        }));
}

/**
 * Verify the current authentication.
 *
 * @param authorization
 * @returns {*|Observable<T>}
 */
function verify() {
    return callAuthApi.call(this, '/verify')
        .map(response => response.getBody());
}

function getPlanets(characterId) {
    return callEsiApi.call(this, `/characters/${characterId}/planets/`);
}

function getColonyLayout(planet) {
    return callEsiApi.call(this, `/characters/${planet.owner_id}/planets/${planet.planet_id}/`);
}

function getPlanet(planetId) {
    return callEsiApi.call(this, `/universe/planets/${planetId}/`, false);
}

function getMarketsHistory(regionId, typeId) {
    return callEsiApi.call(this, `/markets/${regionId}/history/`, false, {type_id: typeId});
}

function getMarketsOrders(regionId, typeId) {
    return callEsiApi.call(this, `/markets/${regionId}/orders/`, false, {type_id: typeId});
}

/**
 * Authorize the given scope against the EVE SSO by asking the user.
 *
 * @param scope array of scopes to authorize
 * @returns an observable
 */
function authorize(scopes) {
    startAuthenticationCallbackServer();
    // register awaiting authentication
    let registration = registerState();
    // open browser
    let authUrl = new url.URL(`${AUTH_BASE}/authorize`);
    let search = new url.URLSearchParams();
    search.append('response_type', 'code');
    search.append('redirect_uri', 'http://localhost:7070/callback');
    let decipher = crypto.createDecipher('aes192', 'q094fhqhfoq47zndoq74to87aa3w6458a93469q23x6n3');
    let decrypted = decipher.update('887e01de8751e8b04d28a746439b6e3f5a498d1740864adecb1d7b9343c04eedb50d009e28ec363867f324a46b42ec31', 'hex', 'utf-8');
    decrypted += decipher.final('utf-8');
    search.append('client_id', decrypted);
    search.append('scope', scopes.join(' '));
    search.append('state', registration.state);
    authUrl.search = search;
    opn(authUrl.toString(), {app: [os.platform() === 'linux' ? 'google-chrome' : 'chrome']});
    return registration.observable;
}

/**
 * After authentication we need to fetch an access token.
 * @param authorizationCode
 * @returns an observable
 */
function getAccessToken(authorizationCode) {
    let decipher = crypto.createDecipher('aes192', 'q094fhqhfoq47zndoq74to87aa3w6458a93469q23x6n3');
    let clientId = decipher.update('887e01de8751e8b04d28a746439b6e3f5a498d1740864adecb1d7b9343c04eedb50d009e28ec363867f324a46b42ec31', 'hex', 'utf-8');
    clientId += decipher.final('utf-8');
    decipher = crypto.createDecipher('aes192', 'q094fhqhfoq47zndoq74to87aa3w6458a93469q23x6n3');
    let secret = decipher.update('eb5ee56507a4d65f2a78a487a0505a3cf13a78c0ae3bafacfe144abab9ea426fcbd0f6c45e3023ebac4dc0539a97a829', 'hex', 'utf-8');
    secret += decipher.final('utf-8');
    return Rx.Observable.fromPromise(
        requestify.post(`${AUTH_BASE}/token`, {
            grant_type: 'authorization_code',
            code: authorizationCode
        }, {
            auth: {username: clientId, password: secret},
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

// TODO wrap this in an object - authenticator or something along the lines
let awaitingAuthentication = {};

let authenticationCallbackServerStarted = false;

// start the callback server
function startAuthenticationCallbackServer() {
    if (authenticationCallbackServerStarted === true) {
        return;
    }
    authenticationCallbackServerStarted = true;

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
}

class EveClient {
    constructor() {
        this.created = Date.now();
        this.authorization = null;
        this.characterId = null;
    }

    authorize(scopes) {
        return authorize.call(this, ['esi-planets.manage_planets.v1'])
            .mergeMap(authenticationCode => getAccessToken(authenticationCode))
            .mergeMap(authorization => {
                this.authorization = authorization;
                return verify.call(this);
            })
            .mergeMap(verification => {
                this.verification = verification;
                return Rx.Observable.from([verification]);
            });
    }
    getPlanets() {
        return getPlanets.call(this, this.verification.CharacterID);
    }
    getColonyLayout(planets) {
        return getColonyLayout.call(this, planets);
    }
    getPlanet(planetId) {
        return getPlanet.call(this, planetId);
    }
    getMarketsHistory(regionId, typeId) {
        return getMarketsHistory.call(this, regionId, typeId);
    }
    getMarketsOrders(regionId, typeId) {
        return getMarketsOrders.call(this, regionId, typeId);
    }
}

exports.EveClient = EveClient;
