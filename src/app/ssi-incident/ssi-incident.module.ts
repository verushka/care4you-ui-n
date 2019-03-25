/**
 * @author alain quinones
 */
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {IncidentRoutesModule} from './routes/incident-routes.module';
import {ExportAsModule} from 'ngx-export-as';

import {IncidentsHttpService} from './services/incidents-http-service';
import {EmployeesHttpService} from './services/employees-http-service';
import {IncidentDeleteService} from './services/incident-delete.service';
import {IncidentUpdateService} from './services/incident-update.service';
import {IncidentReportService} from './services/incident-report.service';
import {IncidentCreateService} from './services/incident-create.service';

import {SsiIncidentComponent} from './ssi-incident.component';
import {IncidentRootComponent} from './components/incident-root/incident-root.component';
import {IncidentListComponent} from './components/incident-list/incident-list.component';
import {IncidentCreateComponent} from './components/incident-create/incident-create.component';
import {IncidentDeleteComponent} from './components/incident-delete/incident-delete.component';
import {IncidentUpdateComponent} from './components/incident-update/incident-update.component';
import {IncidentReportsComponent} from './components/incident-reports/incident-reports.component';


@NgModule({
  declarations: [
    SsiIncidentComponent,
    IncidentRootComponent,
    IncidentListComponent,
    IncidentCreateComponent,
    IncidentDeleteComponent,
    IncidentUpdateComponent,
    IncidentReportsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    IncidentRoutesModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    ExportAsModule
  ],
  exports: [
    SsiIncidentComponent,
    IncidentRootComponent,
    IncidentListComponent,
    IncidentCreateComponent,
    IncidentDeleteComponent,
    IncidentUpdateComponent,
    IncidentReportsComponent
  ],
  providers: [
    IncidentsHttpService,
    EmployeesHttpService,
    IncidentDeleteService,
    IncidentUpdateService,
    IncidentReportService,
    IncidentCreateService
  ],
  entryComponents: [
    IncidentDeleteComponent,
    IncidentReportsComponent
  ]
})
export class SsiIncidentModule {
}
