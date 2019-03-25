/**
 * @author alain.quinones
 */

import {Routes} from '@angular/router';
import {IncidentRootComponent} from '../components/incident-root/incident-root.component';
import {IncidentListComponent} from '../components/incident-list/incident-list.component';
import {IncidentCreateComponent} from '../components/incident-create/incident-create.component';
import {IncidentUpdateComponent} from '../components/incident-update/incident-update.component';


export const INCIDENT_ROUTES_CONFIG: Routes = [
  {
    path: 'incident',
    component: IncidentRootComponent,
    children: [
      {
        path: '',
        children: [
          {path: 'list', component: IncidentListComponent},
          {path: 'create', component: IncidentCreateComponent},
          {path: 'update', component: IncidentUpdateComponent}
        ]
      },
      {path: '**', redirectTo: 'list'}
    ]
  }
];
