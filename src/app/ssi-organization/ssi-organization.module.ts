/**
 * @author alain quinones
 */
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {OrganizationRoutesModule} from './routes/organization-routes.module';

import {SsiOrganizationComponent} from './ssi-organization.component';

import {OrganizationRootComponent} from './components/organization-root/organization-root.component';
import {OrganizationMainComponent} from './components/organization-main/organization-main.component';
import {OrganizationDepartmentComponent} from './components/organization-department/organization-department.component';
import {OrganizationPositionComponent} from './components/organization-position/organization-position.component';
import {HttpClientModule} from '@angular/common/http';
import {DepartmentsHttpService} from './services/departments-http-service';
import {OrganizationDepartmentCreateComponent} from './components/organization-department-create/organization-department-create.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {OrganizationDepartmentUpdateComponent} from './components/organization-department-update/organization-department-update.component';
import {PositionsHttpService} from './services/positions-http-service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {OrganizationDepartmentDeleteService} from './components/organization-department-delete/organization-department-delete.service';
import {OrganizationDepartmentDeleteComponent} from './components/organization-department-delete/organization-department-delete.component';
import {IncidentDeleteComponent} from '../ssi-incident/components/incident-delete/incident-delete.component';
import {OrganizationPositionCreateComponent} from './components/organization-position-create/organization-position-create.component';
import {DepartmentUpdateService} from './services/department-update.service';
import {DepartmentCreateService} from './services/department-create.service';



@NgModule({
  declarations: [
    SsiOrganizationComponent,
    OrganizationRootComponent,
    OrganizationMainComponent,
    OrganizationDepartmentComponent,
    OrganizationPositionComponent,
    OrganizationDepartmentCreateComponent,
    OrganizationDepartmentUpdateComponent,
    OrganizationDepartmentDeleteComponent,
    OrganizationPositionCreateComponent

  ],
  imports: [
    BrowserModule,
    CommonModule,
    OrganizationRoutesModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  exports: [
    SsiOrganizationComponent,
    OrganizationRootComponent,
    OrganizationMainComponent,
    OrganizationDepartmentComponent,
    OrganizationPositionComponent,
    OrganizationDepartmentCreateComponent,
    OrganizationDepartmentDeleteComponent,
    OrganizationPositionCreateComponent

  ],
  providers: [
    DepartmentsHttpService,
    PositionsHttpService,
    OrganizationDepartmentDeleteService,
    DepartmentUpdateService,
    DepartmentCreateService
  ],
  entryComponents: [
    OrganizationDepartmentDeleteComponent
  ]

})
export class SsiOrganizationModule {
}
