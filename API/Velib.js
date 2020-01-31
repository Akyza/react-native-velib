import React from 'react';

const API_TOKEN = "https://opendata.paris.fr/api/records/1.0/search/?dataset=velib-disponibilite-en-temps-reel";

export function getVelibFromApi(){
    const url = API_TOKEN;
    return fetch(url).then((response) => response.json()).catch((error) => console.log(error));
}