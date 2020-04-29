import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';

export const PublicRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: WelcomeComponent
      },
      {
        path: 'welcome',
        component: WelcomeComponent,
        data: {
          title: 'Helper Classes',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Helper Classes' }
          ]
        }
      },
    ]
  }
];
