/**
 * @author nicaela onofre
 */

import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {unsubscribe} from '../../../ssi-shared/utils/unsubscribe.function';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Department} from '../../api/domain/Department';
import {DepartmentsHttpService} from '../../services/departments-http-service';
import {OrganizationDepartmentDeleteService} from './organization-department-delete.service';

@Component({
  selector: 'organization-department-delete',
  templateUrl: './organization-department-delete.component.html',
  styleUrls: ['./organization-department-delete.component.scss']
})
export class OrganizationDepartmentDeleteComponent implements OnInit, OnDestroy {
  @Input() public department: Department;

  private _departmentsSubscription: Subscription;

  constructor(private _departmentsHttpService: DepartmentsHttpService,
              private _departmentDeleteService: OrganizationDepartmentDeleteService,
              public modal: NgbActiveModal) {
  }

  public ngOnInit(): void {
    if (!this.department) {
      this.department = new Department();
    }
  }

  public ngOnDestroy(): void {
    unsubscribe(this._departmentsSubscription);
  }

  public delete(): void {
    this._departmentsSubscription = this._departmentsHttpService.doDelete(this.department.id).subscribe(
      (department: Department) => {
        this._departmentDeleteService.subject.next(department);
        this.modal.close('Ok click');
      }
    );
  }
}

export const MODAL_DEPARTMENT = {
  deleteDepartment: OrganizationDepartmentDeleteComponent
};
