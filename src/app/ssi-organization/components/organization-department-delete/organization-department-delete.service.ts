import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {Department} from '../../api/domain/Department';

@Injectable()
export class OrganizationDepartmentDeleteService {

  private _departmentSubject: Subject<Department>;

  constructor() {
    this._departmentSubject = new Subject<Department>();
  }

  get subject(): Subject<Department> {
    return this._departmentSubject;
  }

}
