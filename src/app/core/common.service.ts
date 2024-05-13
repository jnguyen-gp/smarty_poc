import { Injectable } from '@angular/core';
// import * as SmartyStreetsSDK from 'smartystreets-javascript-sdk';
// import * as _ from '../../assets/smartystreets-sdk-1.1.3.min.js';
declare var require: any
var SmartyStreetsSDK = require("smartystreets-javascript-sdk");

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  USAutocompleteAddress(term: string): any {
    let client;
    let lookup;

    const websiteKey = '12345'; // Your Website Key
    const credentials = new SmartyStreetsSDK.core.SharedCredentials(websiteKey);
    client = SmartyStreetsSDK.core.buildClient.usAutocompletePro(credentials);
    lookup = new SmartyStreetsSDK.usAutocompletePro.Lookup(term);
    console.log(client.send(lookup))
    
    return client.send(lookup);
  }

  IntlAutocompleteAddress(term: string): any {
    let client;
    let lookup;

    const websiteKey = '12345'; // Your Website Key
    const credentials = new SmartyStreetsSDK.core.SharedCredentials(websiteKey);
    client = SmartyStreetsSDK.core.buildClient.internationalAddressAutocomplete(credentials);
    lookup = new SmartyStreetsSDK.internationalAddressAutocomplete.Lookup(term, "GBR");
    console.log(client.send(lookup))
    
    return client.send(lookup);
  }

}