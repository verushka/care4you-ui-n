/**
 * @author alain quinones
 */

import {Component, OnDestroy, OnInit} from '@angular/core';
import {IncidentsHttpService} from '../../services/incidents-http-service';
import {Subscription} from 'rxjs';
import {unsubscribe} from '../../../ssi-shared/utils/unsubscribe.function';
import {Incident} from '../../api/domain/Incident';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {MODAL_INCIDENT} from '../incident-delete/incident-delete.component';
import {IncidentDeleteService} from '../../services/incident-delete.service';
import {IncidentUpdateService} from '../../services/incident-update.service';
import {Router} from '@angular/router';
import {ExportAsConfig, ExportAsService, SupportedExtensions} from 'ngx-export-as';
import {IncidentReportService} from '../../services/incident-report.service';

@Component({
  selector: 'incident-list',
  templateUrl: './incident-list.component.html',
  styleUrls: ['./incident-list.component.scss']
})
export class IncidentListComponent implements OnInit, OnDestroy {

  public incidents: Incident[];

  private _incidentsSubscription: Subscription;
  private _incidentsDeleteSubscription: Subscription;
  private _incidentsReportSubscription: Subscription;

  constructor(private _incidentsHttpService: IncidentsHttpService,
              private _incidentDeleteService: IncidentDeleteService,
              private _incidentUpdateService: IncidentUpdateService,
              private _incidentReportService: IncidentReportService,
              private _router: Router,
              private _modalService: NgbModal,
              private _exportAsService: ExportAsService,) {
    this.incidents = [];
  }

  public ngOnInit(): void {
    this._initialize();
  }

  public ngOnDestroy(): void {
    unsubscribe(this._incidentsSubscription);
    unsubscribe(this._incidentsDeleteSubscription);
    unsubscribe(this._incidentsReportSubscription);
  }

  public onUpdateAction(event: any, incident: Incident): void {
    this._incidentUpdateService.subject.next(incident);
    this._router.navigate(['/incident/update']);
  }

  public onDeleteAction(event: any, incident: Incident): void {
    const modalInstance = this._modalService.open(MODAL_INCIDENT.deleteIncident);
    modalInstance.componentInstance.incident = incident;
  }

  private _initialize(): void {
    this._incidentsSubscription = this._incidentsHttpService.doFindAll().subscribe(
      (incidents: Incident[]) => {
        this.incidents = incidents;
      }
    );

    this._incidentsDeleteSubscription = this._incidentDeleteService.subject.asObservable().subscribe(
      (incident: Incident) => {
        const index = this.incidents.findIndex(value => value.id === incident.id);
        if (index > -1) {
          this.incidents.splice(index, 1);
        }
      }
    );

    this._incidentsReportSubscription = this._incidentReportService.subject.asObservable().subscribe(
      (format: string) => {
        if (this.incidents.length > 0) {
          const exportAsConfig: ExportAsConfig = {
            type: format as SupportedExtensions,
            elementId: 'table'
          };

          this._exportAsService.save(exportAsConfig, 'incidents');
        }
      }
    );
  }
}
