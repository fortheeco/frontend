import * as $ from 'jquery';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  CommonModule
} from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from '@agm/core';
import { DataTablesModule } from 'angular-datatables';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { FullComponent } from './layouts/full/full.component';
import { BlankComponent } from './layouts/blank/blank.component';

import { NavigationComponent } from './shared/header-navigation/navigation.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BreadcrumbComponent } from './shared/breadcrumb/breadcrumb.component';

import { Approutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpinnerComponent } from './shared/spinner.component';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';

import { httpRequestInterceptor } from './_interceptors/httpRequestInterceptor';
import { PapaParseModule } from 'ngx-papaparse';
import {StatusTranslators} from "./_helpers/statusTranslators";
import { MenuItems } from './shared/sidebar/menu-items';
import { QRCodeModule } from 'angularx-qrcode';
import {NgxPrintModule} from 'ngx-print';
import { ViewUserComponent } from './shared/modals/view-user/view-user.component';
import { ViewUserCvComponent } from './shared/modals/view-user-cv/view-user-cv.component';
import { AddUserComponent } from './shared/modals/add-user/add-user.component';
import { EditAboutComponent } from './shared/modals/profile/edit-about/edit-about.component';
import { EditContactComponent } from './shared/modals/profile/edit-contact/edit-contact.component';
import { EditGlobaladdressComponent } from './shared/modals/profile/edit-globaladdress/edit-globaladdress.component';
import { EditSkillsComponent } from './shared/modals/profile/edit-skills/edit-skills.component';
import { AddWorkComponent } from './shared/modals/profile/add-work/add-work.component';
import { AddEducationComponent } from './shared/modals/profile/add-education/add-education.component';
import { EditEducationComponent } from './shared/modals/profile/edit-education/edit-education.component';
import { ViewComponent } from './shared/modals/tasks/view/view.component';
import { CreateOptionsComponent } from './shared/modals/create-options/create-options.component';
import { ToastrModule } from 'ngx-toastr';
import {UtilityProvider} from "./_providers/utility";

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelSpeed: 1,
  wheelPropagation: true,
  minScrollbarLength: 20
};          

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    FullComponent,
    BlankComponent,
    NavigationComponent,
    BreadcrumbComponent,
    SidebarComponent,
    ViewUserComponent,
    ViewUserCvComponent,
    AddUserComponent,
    EditAboutComponent,
    EditContactComponent,
    EditGlobaladdressComponent,
    EditSkillsComponent,
    AddWorkComponent,
    AddEducationComponent,
    EditEducationComponent,
    ViewComponent,
    CreateOptionsComponent,
  ],
  entryComponents: [
    ViewUserComponent, 
    ViewUserCvComponent, 
    AddUserComponent,
    EditAboutComponent,
    EditContactComponent,
    EditSkillsComponent,
    EditGlobaladdressComponent,
    ViewComponent,
    AddWorkComponent,
    AddEducationComponent,
    EditEducationComponent,
    CreateOptionsComponent
  ],

  imports: [
    CommonModule,
    BrowserModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    SlimLoadingBarModule,
    FormsModule,
    PapaParseModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    DataTablesModule,
    HttpModule,
    QRCodeModule,
    NgxPrintModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot(Approutes),
    PerfectScrollbarModule,
    NgMultiSelectDropDownModule.forRoot(),
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyDP6cGriBm9-_8g42-j6DiI1BEl3WHdOhk',
      libraries: ["places"] })
  ],
  providers: [
    StatusTranslators,
    UtilityProvider,
    MenuItems,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: httpRequestInterceptor, multi: true },
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
