/**
 * @author alain.quinones
 */

import {Routes} from '@angular/router';
import {OrganizationRootComponent} from '../components/organization-root/organization-root.component';

import {OrganizationMainComponent} from '../components/organization-main/organization-main.component';
import {OrganizationDepartmentComponent} from '../components/organization-department/organization-department.component';
import {OrganizationPositionComponent} from '../components/organization-position/organization-position.component';
import {OrganizationDepartmentCreateComponent} from '../components/organization-department-create/organization-department-create.component';
import {OrganizationPositionCreateComponent} from '../components/organization-position-create/organization-position-create.component';
import {OrganizationDepartmentUpdateComponent} from '../components/organization-department-update/organization-department-update.component';


export const ORGANIZATION_ROUTES_CONFIG: Routes = [
  {
    path: 'organization',
    component: OrganizationRootComponent,
    children: [
      {
        path: '',
        children: [
          {path: 'main', component: OrganizationMainComponent},
          {path: 'department', component: OrganizationDepartmentComponent},
          {path: 'department-create', component: OrganizationDepartmentCreateComponent},
          {path: 'department-update', component: OrganizationDepartmentUpdateComponent},
          {path: 'position', component: OrganizationPositionComponent},
          {path: 'position-create', component: OrganizationPositionCreateComponent}

        ]
      },
      {path: '**', redirectTo: ''}
    ]
  }
];
