/**
 * @author alain quinones
 */

import {Component} from '@angular/core';
import {IncidentReportService} from '../../services/incident-report.service';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'incident-reports',
  templateUrl: './incident-reports.component.html',
  styleUrls: ['./incident-reports.component.scss']
})
export class IncidentReportsComponent {

  public readonly formats = [
    'pdf',
    'png',
    'csv',
    'txt',
    'xls',
    'xlsx',
    'doc',
    'docx',
    'json',
    'xml'
  ];

  public selectedFormat: string;

  constructor(private _incidentReportService: IncidentReportService,
              public modal: NgbActiveModal) {
    this.selectedFormat = this.formats[0];
  }

  public generateReport(): void {
    if (this.selectedFormat) {
      this._incidentReportService.subject.next(this.selectedFormat);
      this.modal.dismiss('generate click');
    }
  }
}
