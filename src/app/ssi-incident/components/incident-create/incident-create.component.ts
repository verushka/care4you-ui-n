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
import {IncidentCreateService} from '../../services/incident-create.service';

@Component({
  selector: 'incident-create',
  templateUrl: './incident-create.component.html',
  styleUrls: ['./incident-create.component.scss'],
  providers: [{provide: NgbDateAdapter, useClass: NgbDateNativeAdapter}]
})
export class IncidentCreateComponent implements OnInit, OnDestroy {

  public incidentFormGroup: FormGroup;
  public incident: Incident;

  public submitted: boolean;

  public employees: Employee[];

  public incidentTypes: string[];
  public incidentSeverities: string[];

  private _incidentsSubscription: Subscription;
  private _employeesSubscription: Subscription;

  constructor(private _incidentsHttpService: IncidentsHttpService,
              private _employeesHttpService: EmployeesHttpService,
              private _incidentCreateService: IncidentCreateService,
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
    unsubscribe(this._incidentsSubscription);
    unsubscribe(this._employeesSubscription);
  }

  public onSubmit(): void {
    this.submitted = true;

    if (!this.incidentFormGroup.valid) {
      return;
    }

    const incidentDTO: IncidentDTO = this.incidentFormGroup.value;
    this._incidentsSubscription = this._incidentsHttpService.doInsert(incidentDTO).subscribe(
      (incident: Incident) => {
        this.incident = incident;
        this._incidentCreateService.subject.next(incident);
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
  }
}
