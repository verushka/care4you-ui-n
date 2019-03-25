import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import {Incident} from '../api/domain/Incident';

@Injectable()
export class IncidentDeleteService {

  private _incidentSubject: BehaviorSubject<Incident>;

  constructor() {
    this._incidentSubject = new BehaviorSubject<Incident>(undefined);
  }

  get subject(): Subject<Incident> {
    return this._incidentSubject;
  }

}
