import { AgmCoreModule } from '@agm/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTablesModule } from 'angular-datatables';
import { QRCodeModule } from 'angularx-qrcode';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { PapaParseModule } from 'ngx-papaparse';
import { PerfectScrollbarConfigInterface, PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { NgxPrintModule } from 'ngx-print';
import { ToastrModule } from 'ngx-toastr';
import { Approutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlankComponent } from './layouts/blank/blank.component';
import { FullComponent } from './layouts/full/full.component';
import { BreadcrumbComponent } from './shared/breadcrumb/breadcrumb.component';
import { NavigationComponent } from './shared/header-navigation/navigation.component';
import { AddUserComponent } from './shared/modals/add-user/add-user.component';
import { ConfirmActionComponent } from './shared/modals/confirm-action/confirm-action.component';
import { CreateOptionsComponent } from './shared/modals/create-options/create-options.component';
import { GetViewLocationComponent } from './shared/modals/get-view-location/get-view-location.component';
import { AcceptEmployeeComponent } from './shared/modals/organization/accept-employee/accept-employee.component';
import { AddOrganizationServiceComponent } from './shared/modals/organization/add-organization-service/add-organization-service.component';
import { EditOrganizationAboutComponent } from './shared/modals/organization/edit-organization-about/edit-organization-about.component';
import { FilterEmployeesComponent } from './shared/modals/organization/filter-employees/filter-employees.component';
import { EditProblemComponent } from './shared/modals/problems/edit-problem/edit-problem.component';
import { ViewProblemComponent } from './shared/modals/problems/view-problem/view-problem.component';
import { AddEducationComponent } from './shared/modals/profile/add-education/add-education.component';
import { AddWorkComponent } from './shared/modals/profile/add-work/add-work.component';
import { EditAboutComponent } from './shared/modals/profile/edit-about/edit-about.component';
import { EditContactComponent } from './shared/modals/profile/edit-contact/edit-contact.component';
import { EditEducationComponent } from './shared/modals/profile/edit-education/edit-education.component';
import { EditGlobaladdressComponent } from './shared/modals/profile/edit-globaladdress/edit-globaladdress.component';
import { EditSkillsComponent } from './shared/modals/profile/edit-skills/edit-skills.component';
import { ApplyComponent } from './shared/modals/tasks/apply/apply.component';
import { ViewApplicantComponent } from './shared/modals/tasks/view-applicant/view-applicant.component';
import { ViewComponent } from './shared/modals/tasks/view/view.component';
import { AddFreeAddressesComponent } from './shared/modals/user/add-free-addresses/add-free-addresses.component';
import { AddUserContactComponent } from './shared/modals/user/add-user-contact/add-user-contact.component';
import { EditUserAddressComponent } from './shared/modals/user/edit-user-address/edit-user-address.component';
import { NewUserAddressComponent } from './shared/modals/user/new-user-address/new-user-address.component';
import { ViewUserCvComponent } from './shared/modals/view-user-cv/view-user-cv.component';
import { ViewUserComponent } from './shared/modals/view-user/view-user.component';
import { SharedModule } from './shared/shared.module';
import { MenuItems } from './shared/sidebar/menu-items';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { SpinnerComponent } from './shared/spinner.component';
import { JwtInterceptor } from './_helpers';
import { StatusTranslators } from './_helpers/statusTranslators';
import { httpRequestInterceptor } from './_interceptors/httpRequestInterceptor';
import { SharedServiceProvider } from './_providers/shared-provider';
import { UtilityProvider } from './_providers/utility';
import { UserService } from './_services';
import { FormErrorService } from './_services/form-error/form-error.service';
import { OrganizationService } from './_services/organization/organization.service';
import { ShowSomeSkillsComponent } from './shared/modals/user/show-some-skills/show-some-skills.component';
import { SearchOrganizationAutocompleteComponent } from './shared/modals/organization/search-organization-autocomplete/search-organization-autocomplete.component';
import { JoinOrganizationComponent } from './shared/modals/organization/join-organization/join-organization.component';
import { FilterOrganizationBranchesComponent } from './shared/modals/organization/filter-organization-branches/filter-organization-branches.component';


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
    CreateOptionsComponent,
    EditProblemComponent,
    ViewProblemComponent,
    ViewComponent,
    ApplyComponent,
    ViewApplicantComponent,
    GetViewLocationComponent,
    EditOrganizationAboutComponent,
    AddUserContactComponent,
    ConfirmActionComponent,
    NewUserAddressComponent,
    EditUserAddressComponent,
    AddFreeAddressesComponent,
    AddOrganizationServiceComponent,
    FilterEmployeesComponent,
    AcceptEmployeeComponent,
    ShowSomeSkillsComponent,
    JoinOrganizationComponent,
    FilterOrganizationBranchesComponent,
  ],
  entryComponents: [
    ViewUserComponent,
    ViewUserCvComponent,
    AddUserComponent,
    EditAboutComponent,
    EditContactComponent,
    EditSkillsComponent,
    EditGlobaladdressComponent,
    AddWorkComponent,
    AddEducationComponent,
    EditEducationComponent,
    EditProblemComponent,
    ViewProblemComponent,
    CreateOptionsComponent,
    ViewComponent,
    ViewApplicantComponent,
    ApplyComponent,
    GetViewLocationComponent,
    EditOrganizationAboutComponent,
    AddUserContactComponent,
    ConfirmActionComponent,
    NewUserAddressComponent,
    EditUserAddressComponent,
    AddFreeAddressesComponent,
    AddOrganizationServiceComponent,
    FilterEmployeesComponent,
    AcceptEmployeeComponent,
    ShowSomeSkillsComponent,
    JoinOrganizationComponent,
    FilterOrganizationBranchesComponent,
  ],

  imports: [
    // CommonModule,
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
    SharedModule,
    RouterModule.forRoot(Approutes),
    PerfectScrollbarModule,
    NgMultiSelectDropDownModule.forRoot(),
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyDP6cGriBm9-_8g42-j6DiI1BEl3WHdOhk',
      libraries: ['places'] })
  ],
  providers: [
    StatusTranslators,
    SharedServiceProvider,
    UtilityProvider,
    MenuItems,
    OrganizationService,
    FormErrorService,
    UserService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: httpRequestInterceptor, multi: true },
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
