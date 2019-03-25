import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';

@Injectable()
export class IncidentReportService {

  private _incidentSubject: BehaviorSubject<string>;

  constructor() {
    this._incidentSubject = new BehaviorSubject<string>(undefined);
  }

  get subject(): Subject<string> {
    return this._incidentSubject;
  }

}
