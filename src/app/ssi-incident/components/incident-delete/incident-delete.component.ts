/**
 * @author alain quinones
 */

import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {IncidentsHttpService} from '../../services/incidents-http-service';
import {Subscription} from 'rxjs';
import {unsubscribe} from '../../../ssi-shared/utils/unsubscribe.function';
import {Incident} from '../../api/domain/Incident';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {IncidentDeleteService} from '../../services/incident-delete.service';
import {IncidentReportsComponent} from '../incident-reports/incident-reports.component';

@Component({
  selector: 'incident-delete',
  templateUrl: './incident-delete.component.html',
  styleUrls: ['./incident-delete.component.scss']
})
export class IncidentDeleteComponent implements OnInit, OnDestroy {
  @Input() public incident: Incident;

  private _incidentsSubscription: Subscription;

  constructor(private _incidentsHttpService: IncidentsHttpService,
              private _incidentDeleteService: IncidentDeleteService,
              public modal: NgbActiveModal) {
  }

  public ngOnInit(): void {
    if (!this.incident) {
      this.incident = new Incident();
    }
  }

  public ngOnDestroy(): void {
    unsubscribe(this._incidentsSubscription);
  }

  public delete(): void {
    this._incidentsSubscription = this._incidentsHttpService.doDelete(this.incident.id).subscribe(
      (incident: Incident) => {
        this._incidentDeleteService.subject.next(incident);
        this.modal.close('Ok click');
      }
    );
  }
}

export const MODAL_INCIDENT = {
  deleteIncident: IncidentDeleteComponent,
  reportIncident: IncidentReportsComponent
};
