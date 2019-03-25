/**
 * @author alain quinones
 */

import {Component, OnDestroy, OnInit} from '@angular/core';
import {IncidentsHttpService} from '../../services/incidents-http-service';
import {Subscription} from 'rxjs';
import {unsubscribe} from '../../../ssi-shared/utils/unsubscribe.function';
import {Incident, IncidentDTO} from '../../api/domain/Incident';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IncidentTypeEnum} from '../../api/enum/incident-type.enum';
import {IncidentSeverityEnum} from '../../api/enum/incident-severity.enum';
import {EmployeesHttpService} from '../../services/employees-http-service';
import {Employee} from '../../api/domain/Employee';
import {NgbDateAdapter, NgbDateNativeAdapter} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';
import {IncidentUpdateService} from '../../services/incident-update.service';

@Component({
  selector: 'incident-update',
  templateUrl: './incident-update.component.html',
  styleUrls: ['./incident-update.component.scss'],
  providers: [{provide: NgbDateAdapter, useClass: NgbDateNativeAdapter}]
})
export class IncidentUpdateComponent implements OnInit, OnDestroy {

  public incidentFormGroup: FormGroup;
  public incident: Incident;

  public submitted: boolean;

  public employees: Employee[];

  public incidentTypes: string[];
  public incidentSeverities: string[];

  private _incidentsUpdateSubscription: Subscription;
  private _incidentsSubscription: Subscription;
  private _employeesSubscription: Subscription;


  constructor(private _incidentsHttpService: IncidentsHttpService,
              private _employeesHttpService: EmployeesHttpService,
              private _incidentUpdateService: IncidentUpdateService,
              private _formBuilder: FormBuilder,
              private _router: Router) {
    this._initForm();

    this.incidentTypes = Object.keys(IncidentTypeEnum);
    this.incidentSeverities = Object.keys(IncidentSeverityEnum);
  }

  public ngOnInit(): void {
    this._initialize();
  }

  public ngOnDestroy(): void {
    this._incidentUpdateService.subject.next(undefined);
    unsubscribe(this._incidentsSubscription);
    unsubscribe(this._employeesSubscription);
    unsubscribe(this._incidentsUpdateSubscription);
  }

  public onSubmit(): void {
    this.submitted = true;

    if (!this.incidentFormGroup.valid) {
      return;
    }

    const incidentDTO: IncidentDTO = this.incidentFormGroup.value;
    this._incidentsSubscription = this._incidentsHttpService.doUpdate(this.incident.id, incidentDTO).subscribe(
      (incident: Incident) => {
        this.incident = incident;
        this._router.navigate(['/incident/list']);
      }
    );
  }

  private _initForm(): void {
    this.incidentFormGroup = this._formBuilder.group({
      name: [null, [Validators.required]],
      description: [null],
      date: [null, [Validators.required]],
      type: [null, [Validators.required]],
      severity: [null, [Validators.required]],
      employeeId: [null, [Validators.required]]
    });
  }

  private _initialize(): void {
    this._employeesSubscription = this._employeesHttpService.doFindAll().subscribe(
      (employees: Employee[]) => {
        this.employees = employees;
      }
    );

    this._incidentsUpdateSubscription = this._incidentUpdateService.subject.asObservable().subscribe(
      (incident: Incident) => {
        if (incident) {
          this.incident = incident;
          const date = new Date(incident.date);
          const incidentDTO = new IncidentDTO(
            incident.name,
            incident.description,
            date,
            incident.type,
            incident.severity,
            incident.employee.id);
          this.incidentFormGroup.patchValue(incidentDTO);
        } else {
          this._router.navigate(['incident/list']);
        }
      }
    );
  }
}
