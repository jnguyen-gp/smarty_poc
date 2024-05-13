import { Component, OnInit } from '@angular/core';
import { CommonService } from '../core/common.service';

@Component({
  selector: 'app-addressbox',
  templateUrl: './addressbox.component.html'
})
export class AddressboxComponent implements OnInit {

  addressOptions = <any>[];
  address: string;

  constructor(private _commonService: CommonService) { }

  ngOnInit() {}

  onUsChange(term: any) {
    this._commonService.USAutocompleteAddress(term).then((data: any) => {
      this.addressOptions = data.result as any[];
    }).catch();
  }

  onIntlChange(term: any) {
    this._commonService.IntlAutocompleteAddress(term).then((data: any) => {
      this.addressOptions = data.result as any[];
    }).catch();
  }

}
