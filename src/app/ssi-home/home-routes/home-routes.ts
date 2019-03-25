/**
 * @author alain.quinones
 */

import {Routes} from '@angular/router';
import {HomeRootComponent} from '../home-root/home-root.component';

import {HomeMainComponent} from '../home-main/home-main.component';

export const HOME_ROUTES_CONFIG: Routes = [
  {
    path: 'home',
    component: HomeRootComponent,
    children: [
      {
        path: '',
        children: [
          {path: 'main', component: HomeMainComponent}
        ]
      },
      {path: '**', redirectTo: ''}
    ]
  }
];
