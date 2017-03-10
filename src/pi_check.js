const opn = require('opn'); // start system process to open browser
const express = require('express'); // start local server for redirect after EVE authentication
const fs = require('fs'); // read config
const Rx = require('rxjs/Rx'); // do all the things

const config = JSON.parse(fs.readFileSync(`${process.env['HOME']}/.esi.json`, 'utf8'));

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
