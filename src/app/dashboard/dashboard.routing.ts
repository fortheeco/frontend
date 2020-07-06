import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { CreateComponent } from './tasks/create/create.component';
import { ViewUserProfileComponent } from './tasks/view-user-profile/view-user-profile.component';
import { ListComponent } from './tasks/list/list.component';

export const DashboardRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HomeComponent,
        data: {
          title: 'Home',
          urls: [
            { title: 'Dashboard', url: '/overview' },
            { title: 'Home' }
          ]
        }
      },
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
      },
      {
        path: 'tasks',
        component: ListComponent,
        data: {
          title: 'Tasks',
          urls: [
            { title: 'Dashboard', url: '/tasks' },
            { title: 'Tasks' }
          ]
        }
      },
      {
        path: 'tasks/create',
        component: CreateComponent,
        data: {
          title: 'Create Task',
          urls: [
            { title: 'Dashboard', url: '/tasks/create' },
            { title: 'Create Task' }
          ]
        }
      },
      {
        path: 'tasks/view-user-profile',
        component: ViewUserProfileComponent,
        data: {
          title: 'View User Profile',
          urls: [
            { title: 'Dashboard', url: '/tasks/view-user-profile' },
            { title: 'View User Profile' }
          ]
        }
      },
      {
        path: 'profile',
        component: ProfileComponent,
        data: {
          title: 'Profile',
          urls: [
            { title: 'Dashboard', url: '/profile' },
            { title: 'Profile' }
          ]
        }
      },
    ]
  },
  {
    path: '',
    redirectTo: ''
  },
];
