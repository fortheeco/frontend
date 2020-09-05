import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { ChartistModule } from 'ng-chartist';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CalendarModule, CalendarDateFormatter } from 'angular-calendar';

import { DashboardRoutes } from './dashboard.routing';

import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { DragulaModule } from 'ng2-dragula';

import {NgxPrintModule} from 'ngx-print';
import { ProfileComponent } from './profile/profile.component';
import { CreateComponent } from './tasks/create/create.component';
import { ViewUserProfileComponent } from './tasks/view-user-profile/view-user-profile.component';
import { ListComponent } from './tasks/list/list.component';

import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { CreateProblemComponent } from './problem/create-problem/create-problem.component';
import { OrganizationComponent } from './organization/organization.component';
import { ProblemCardComponent } from '../shared/components/problems/problem-card/problem-card.component';
import { TaskCardComponent } from '../shared/components/tasks/task-card/task-card.component';
import { ViewOrganizationProblemsComponent } from './organization/view-organization-problems/view-organization-problems.component';
import { ViewOrganizationTasksComponent } from './organization/view-organization-tasks/view-organization-tasks.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    NgbModule,
    ChartsModule,
    ChartistModule,
    RouterModule.forChild(DashboardRoutes),
    NgMultiSelectDropDownModule.forRoot(),
    AgmCoreModule,
    PerfectScrollbarModule,
    CalendarModule.forRoot(),
    NgxChartsModule,
    ReactiveFormsModule,
    DragulaModule,
    NgxDatatableModule,
    NgxPrintModule
  ],
  declarations: [
    HomeComponent,
    ProfileComponent,
    CreateComponent,
    ViewUserProfileComponent,
    ListComponent,
    CreateProblemComponent,
    OrganizationComponent,
    ViewOrganizationProblemsComponent,
    ViewOrganizationTasksComponent,
    ProblemCardComponent,
    TaskCardComponent,
   ],
    entryComponents: [
    ]
})
export class DashboardModule {}
