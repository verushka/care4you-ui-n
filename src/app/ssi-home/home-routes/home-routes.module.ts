/**
 * @author alain.quinones
 */

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {HOME_ROUTES_CONFIG} from './home-routes';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(HOME_ROUTES_CONFIG)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class HomeRoutesModule {
}
