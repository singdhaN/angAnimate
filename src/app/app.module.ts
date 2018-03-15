import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {HttpModule, Http} from "@angular/http";


import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
