/**
 * @author nicaela onofre
 */

import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {unsubscribe} from '../../../ssi-shared/utils/unsubscribe.function';
import {DepartmentsHttpService} from '../../services/departments-http-service';
import {Department} from '../../api/domain/Department';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {
  MODAL_DEPARTMENT
} from '../organization-department-delete/organization-department-delete.component';
import {OrganizationDepartmentDeleteService} from '../organization-department-delete/organization-department-delete.service';

import {DepartmentUpdateService} from '../../services/department-update.service';
import {Router} from '@angular/router';
import {ExportAsService} from 'ngx-export-as';

@Component({
  selector: 'organization-department',
  templateUrl: './organization-department.component.html',
  styleUrls: ['./organization-department.component.scss']
})
export class OrganizationDepartmentComponent implements OnInit, OnDestroy {

  private _departmentsSubscription: Subscription;
  private _departmentsDeleteSubscription: Subscription;
  public infoDepartments: Department[];

  constructor(private _departmentsHttpService: DepartmentsHttpService,
              private _departmentsDeleteService: OrganizationDepartmentDeleteService,
              private _departmentsUpdateService: DepartmentUpdateService,
              private _router: Router,
              private _exportAsService: ExportAsService,
              private _modalService: NgbModal) {
    this.infoDepartments = [];
  }

  public ngOnInit(): void {
    this._initialize();
  }

  public ngOnDestroy(): void {
    unsubscribe(this._departmentsSubscription);
    unsubscribe(this._departmentsDeleteSubscription);
  }

  public onDeleteAction(event: any, department: Department): void {
    const modalInstance = this._modalService.open(MODAL_DEPARTMENT.deleteDepartment);
    modalInstance.componentInstance.department = department;
  }

  public onUpdateAction(event: any, department: Department): void {
    this._departmentsUpdateService.subject.next(department);
    this._router.navigate(['/organization/department-update']);
  }

  private _initialize(): void {
    this._departmentsSubscription = this._departmentsHttpService.doFindAll().subscribe(
      (departments: Department[]) => {
        console.log(departments);
        this.infoDepartments = departments;
      }
    );
    this._departmentsDeleteSubscription = this._departmentsDeleteService.subject.asObservable().subscribe(
      (department: Department) => {
        const index = this.infoDepartments.findIndex(value => value.id === department.id);
        if (index > -1) {
          this.infoDepartments.splice(index, 1);
        }
      }
    );
  }
}

