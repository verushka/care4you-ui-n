/**
 * @author nicaela onofre
 */
import {Injectable} from '@angular/core';
import {BaseHttpService} from '../../boostrap/base-http-service';
import {PositionDTO} from '../api/domain/Position';


@Injectable()
export class PositionsHttpService extends BaseHttpService<Position, PositionDTO> {

  protected path(): string {
    return '/positions';
  }
}
