import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { MatAutocompleteModule, MatInputModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AddressboxComponent } from './addressbox/addressbox.component';

@NgModule({
  declarations: [
    AppComponent,
    AddressboxComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatAutocompleteModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
