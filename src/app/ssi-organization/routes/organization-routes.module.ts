/**
 * @author alain.quinones
 */

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {ORGANIZATION_ROUTES_CONFIG} from './organization-routes';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ORGANIZATION_ROUTES_CONFIG)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class OrganizationRoutesModule {
}
