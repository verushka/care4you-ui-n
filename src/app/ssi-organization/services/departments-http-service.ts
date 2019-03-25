/**
 * @author nicaela onofre
 */
import {Injectable} from '@angular/core';
import {BaseHttpService} from '../../boostrap/base-http-service';
import {Department, DepartmentDTO} from '../api/domain/Department';

@Injectable()
export class DepartmentsHttpService extends BaseHttpService<Department, DepartmentDTO> {

  protected path(): string {
    return '/departments';
  }
}
