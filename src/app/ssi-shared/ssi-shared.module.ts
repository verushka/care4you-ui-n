/**
 * @author alain quinones
 */
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {SharedMenuComponent} from './components/shared-menu/shared-menu.component';
import {SsiRoutesModule} from '../ssi-routes/ssi-routes.module';


@NgModule({
  declarations: [
    SharedMenuComponent
  ],
  imports: [
    SsiRoutesModule,
    BrowserModule,
    CommonModule,
  ],
  exports: [
    SharedMenuComponent
  ]
})
export class SsiSharedModule {
}
