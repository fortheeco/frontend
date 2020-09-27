import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { ChartsModule } from 'ng2-charts';
import { ChartistModule } from 'ng-chartist';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CalendarModule } from 'angular-calendar';

import { DashboardRoutes } from './dashboard.routing';

import { HomeComponent } from './home/home.component';
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
import { NotificationsComponent } from './notifications/notifications.component';
import { ProblemCardComponent } from '../shared/components/problems/problem-card/problem-card.component';
import { TaskCardComponent } from '../shared/components/tasks/task-card/task-card.component';
import { ViewOrganizationProblemsComponent } from './organization/view-organization-problems/view-organization-problems.component';
import { ViewOrganizationTasksComponent } from './organization/view-organization-tasks/view-organization-tasks.component';
import { ViewOrganizationHeaderComponent } from './organization/view-organization-header/view-organization-header.component';
import { OrganizationAboutComponent } from './organization/organization-about/organization-about.component';
// tslint:disable-next-line: max-line-length
import { OrganizationAboutOverviewComponent } from './organization/organization-about/organization-about-overview/organization-about-overview.component';
// tslint:disable-next-line: max-line-length
import { OrganizationAboutStatisticsComponent } from './organization/organization-about/organization-about-statistics/organization-about-statistics.component';
import { SharedModule } from '../shared/shared.module';
import { OrganizationServicesComponent } from './organization/organization-services/organization-services.component';
import { OrganizationEmployeesSkillsComponent } from './organization/organization-employees-skills/organization-employees-skills.component';
import { OrganizationBranchesComponent } from './organization/organization-branches/organization-branches.component';
import { OrganizationCommunityComponent } from './organization/organization-community/organization-community.component';
import { EmployeesComponent } from './organization/organization-employees-skills/employees/employees.component';
import { SkillsComponent } from './organization/organization-employees-skills/skills/skills.component';
import { OrganizationBranchComponent } from './organization/organization-branches/organization-branch/organization-branch.component';

@NgModule({
  imports: [
    ChartsModule,
    ChartistModule,
    RouterModule.forChild(DashboardRoutes),
    NgMultiSelectDropDownModule.forRoot(),
    AgmCoreModule,
    PerfectScrollbarModule,
    CalendarModule.forRoot(),
    NgxChartsModule,
    DragulaModule,
    NgxDatatableModule,
    NgxPrintModule,

    // Modules used accross all other modules
    SharedModule,
  ],
  declarations: [
    HomeComponent,
    ProfileComponent,
    CreateComponent,
    ViewUserProfileComponent,
    ListComponent,
    CreateProblemComponent,
    OrganizationComponent,
    NotificationsComponent,
    ViewOrganizationProblemsComponent,
    ViewOrganizationTasksComponent,
    ProblemCardComponent,
    TaskCardComponent,
    ViewOrganizationHeaderComponent,
    OrganizationAboutComponent,
    OrganizationAboutOverviewComponent,
    OrganizationAboutStatisticsComponent,
    OrganizationServicesComponent,
    OrganizationEmployeesSkillsComponent,
    OrganizationBranchesComponent,
    OrganizationCommunityComponent,
    EmployeesComponent,
    SkillsComponent,
    OrganizationBranchComponent,
   ],
    entryComponents: [
    ]
})
export class DashboardModule {}
