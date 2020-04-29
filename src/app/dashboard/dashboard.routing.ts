import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

export const DashboardRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'overview',
        component: HomeComponent,
        data: {
          title: 'Home',
          urls: [
            { title: 'Dashboard', url: '/overview' },
            { title: 'Home' }
          ]
        }
      }
    ]
  },
  {
    path: '',
    redirectTo: ''
  },
];
