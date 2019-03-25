/**
 * @author nicaela onofre
 */

import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {unsubscribe} from '../../../ssi-shared/utils/unsubscribe.function';

import {Department, DepartmentDTO} from '../../api/domain/Department';
import {DepartmentsHttpService} from '../../services/departments-http-service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgbDateAdapter, NgbDateNativeAdapter} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';

import {DepartmentUpdateService} from '../../services/department-update.service';

@Component({
  selector: 'organization-department-update',
  templateUrl: './organization-department-update.component.html',
  styleUrls: ['./organization-department-update.component.scss'],
  providers: [{provide: NgbDateAdapter, useClass: NgbDateNativeAdapter}]
})
export class OrganizationDepartmentUpdateComponent implements OnInit, OnDestroy {

  public departmentFormGroup: FormGroup;
  public department: Department;

  public submitted: boolean;

  private _departmentsSubscription: Subscription;
  private _departmentsUpdateSubscription: Subscription;

  constructor(private _departmentsHttpService: DepartmentsHttpService,
              private _departmentUpdateService: DepartmentUpdateService,
              private _formBuilder: FormBuilder,
              private _router: Router) {
    this._initForm();
  }

  public ngOnInit(): void {
    this._initialize();
  }

  public ngOnDestroy(): void {
    this._departmentUpdateService.subject.next(undefined);
    unsubscribe(this._departmentsSubscription);
    unsubscribe(this._departmentsUpdateSubscription);
  }

  public onSubmit(): void {
    this.submitted = true;

    if (!this.departmentFormGroup.valid) {
      return;
    }

    const departmentDTO: DepartmentDTO = this.departmentFormGroup.value;
    this._departmentsSubscription = this._departmentsHttpService.doUpdate(this.department.id, departmentDTO).subscribe(
      (department: Department) => {
        this.department = department;
        this._router.navigate(['/organization/department']);
      }
    );
  }

  private _initForm(): void {
    this.departmentFormGroup = this._formBuilder.group({
      code: [null, [Validators.required]],
      name: [null, [Validators.required]],
      description: [null]
    });
  }

  private _initialize(): void {
    this._departmentsUpdateSubscription = this._departmentUpdateService.subject.asObservable().subscribe(
      (department: Department) => {
        if (department) {
          this.department = department;
          const departmentDTO = new DepartmentDTO(
            department.code,
            department.name,
            department.description);
          this.departmentFormGroup.patchValue(departmentDTO);
        } else {
          this._router.navigate(['organization/department']);
        }
      }
    );
  }
}
