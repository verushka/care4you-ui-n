/**
 * @author nicaela onofre
 */

import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {unsubscribe} from '../../../ssi-shared/utils/unsubscribe.function';

import {Department, DepartmentDTO} from '../../api/domain/Department';
import {DepartmentsHttpService} from '../../services/departments-http-service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {IncidentCreateService} from '../../../ssi-incident/services/incident-create.service';

@Component({
  selector: 'organization-department-create',
  templateUrl: './organization-department-create.component.html',
  styleUrls: ['./organization-department-create.component.scss']
})
export class OrganizationDepartmentCreateComponent implements OnInit, OnDestroy {

  public departmentFormGroup: FormGroup;
  public department: Department;

  public submitted: boolean;

  private _departmentsSubscription: Subscription;

  constructor(private _departmentsHttpService: DepartmentsHttpService,
              private _incidentCreateService: IncidentCreateService,
              private _formBuilder: FormBuilder,
              private _router: Router) {
    this._initForm();
  }

  public ngOnInit(): void {
  }

  public ngOnDestroy(): void {
    unsubscribe(this._departmentsSubscription);
  }

  public onSubmit(): void {
    this.submitted = true;

    if (!this.departmentFormGroup.valid) {
      return;
    }

    const departmentDTO: DepartmentDTO = this.departmentFormGroup.value;
    this._departmentsSubscription = this._departmentsHttpService.doInsert(departmentDTO).subscribe(
      (department: Department) => {
        this.department = department;
        this._router.navigate(['/organization/department']);
        console.log(department);
      }
    );
  }

  private _initForm(): void {
    this.departmentFormGroup = this._formBuilder.group({
      code: [null, Validators.required],
      name: [null, [Validators.required]],
      description: [null],
      companyId: [null]
    });
  }
}
