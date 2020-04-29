import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { BlankComponent } from './layouts/blank/blank.component';
import { AuthGuard } from './_guards';
import { Role } from './_models';

export const Approutes: Routes = [
  {
    path: '',
    component: BlankComponent,
    children: [
      {
        path: '',
        loadChildren:
          './public/public.module#PublicModule'
      },
      {
        path: 'authentication',
        loadChildren:
          './authentication/authentication.module#AuthenticationModule'
      },
      {
        path: 'public',
        loadChildren:
          './public/public.module#PublicModule'
      }
    ]
  },
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule',
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/authentication/404'
  }
];
