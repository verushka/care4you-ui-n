import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SsiRoutesModule} from './ssi-routes/ssi-routes.module';
import {SsiSharedModule} from './ssi-shared/ssi-shared.module';

import {SsiComponent} from './ssi.component';


@NgModule({
  declarations: [
    SsiComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    SsiSharedModule,
    SsiRoutesModule,
  ],
  providers: [],
  bootstrap: [SsiComponent]
})
export class SsiModule {
}
