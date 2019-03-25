import {Component} from '@angular/core';
import {LoadDummyEmployeesService} from './load-dummy-employees.service';

@Component({
  selector: 'ssi-root',
  templateUrl: './ssi.component.html',
  styleUrls: ['./ssi.component.scss']
})
export class SsiComponent {

  constructor(private _loadDummyEmployeesService: LoadDummyEmployeesService) {

  }
}
