/**
 * @author alain quinones
 */
import {Injectable} from '@angular/core';
import {BaseHttpService} from '../../boostrap/base-http-service';
import {Employee, EmployeeDTO} from '../api/domain/Employee';

@Injectable()
export class EmployeesHttpService extends BaseHttpService<Employee, EmployeeDTO> {

  protected path(): string {
    return '/employees';
  }
}
