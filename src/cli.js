const esi = require('./index');
const url = require('url');
const opn = require('opn');
const requestify = require('requestify');
const express = require('express');
const Deferred = require("promised-io/promise").Deferred;
const fs = require('fs');

const config = JSON.parse(fs.readFileSync(`${process.env['HOME']}/.esi.json`, 'utf8'));

/**
 *  Authorize the given scope against the EVE SSO.
 * @param scope array of scopes to authorize
 * @returns promise returning the token or whatever
 */
function authorize(scopes) {
    let deferred = new Deferred();
    // start the callback server
    const callbackServer = express();
    callbackServer.get('/callback', (callbackRequest, callbackResponse) => {
        let authorizationCode = callbackRequest.query.code;
        requestify.post('https://login.eveonline.com/oauth/token', {
            grant_type: 'authorization_code',
            code: authorizationCode
        }, {
            auth: {username: config.clientId, password: config.clientSecret},
            dataType: 'form-url-encoded'
        }).then((tokenResponse) => {
            let authorization = tokenResponse.getBody();
            esi.ApiClient.instance.authentications['evesso'].accessToken = authorization.access_token;
            deferred.resolve();
        }, (error) => {
            deferred.reject(error);
        });
        callbackResponse.send('You are allowed to close this now.');
    });
    callbackServer.listen(7070);

    // open browser
    let authUrl = new url.URL('https://login.eveonline.com/oauth/authorize');
    let search = new url.URLSearchParams();
    search.append('response_type', 'code');
    search.append('redirect_uri', 'http://localhost:7070/callback');
    search.append('client_id', config.clientId);
    search.append('scope', scopes.join(' '));
    authUrl.search = search;

    opn(authUrl.toString());

    return deferred.promise;
}


function getCharacterID() {
    let deferred = new Deferred();
    requestify.get('https://login.eveonline.com/oauth/verify', {
        headers: {
            Authorization: 'Bearer ' + esi.ApiClient.instance.authentications['evesso'].accessToken
        }
    }).then((data) => {
        deferred.resolve(data.getBody().CharacterID);
    }, (error) => {
        deferred.reject(error);
    });

    return deferred.promise;
}

function getPlanets(characterID) {
    let piService = new esi.PlanetaryInteractionApi();
    piService.getCharactersCharacterIdPlanets(characterID, {}, (error, data, response) => {
        if (error) {
            console.error(error);
        }
        console.log(data);
    });
}

function getStructuresOnPlanet() {
}

/// PI stuff
authorize(['esi-planets.manage_planets.v1']).then(() => {
    getCharacterID().then((characterID) => {
        getPlanets(characterID);
    }, (error) => {
        console.error(error);
    });
}, (error) => {
    console.error(error);
    exit();
});


function exit() {
    process.exit();
}

