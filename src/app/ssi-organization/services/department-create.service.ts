import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import {Department} from '../api/domain/Department';

@Injectable()
export class DepartmentCreateService {

  private _departmentSubject: BehaviorSubject<Department>;

  constructor() {
    this._departmentSubject = new BehaviorSubject<Department>(undefined);
  }

  get subject(): Subject<Department> {
    return this._departmentSubject;
  }

}
