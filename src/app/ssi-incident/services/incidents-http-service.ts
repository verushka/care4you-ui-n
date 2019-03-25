/**
 * @author alain quinones
 */
import {Injectable} from '@angular/core';
import {BaseHttpService} from '../../boostrap/base-http-service';
import {Incident, IncidentDTO} from '../api/domain/Incident';

@Injectable()
export class IncidentsHttpService extends BaseHttpService<Incident, IncidentDTO> {

  protected path(): string {
    return '/incidents';
  }
}
