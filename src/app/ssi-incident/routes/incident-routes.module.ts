/**
 * @author alain.quinones
 */

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {INCIDENT_ROUTES_CONFIG} from './incident-routes';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(INCIDENT_ROUTES_CONFIG)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class IncidentRoutesModule {
}
