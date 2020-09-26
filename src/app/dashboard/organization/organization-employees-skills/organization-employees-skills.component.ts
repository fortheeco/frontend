import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { OrganizationService } from 'src/app/_services/organization/organization.service';
import { Subscription } from 'rxjs';
import { AppOrganization } from 'src/app/_models/organization/app-organization';
import { finalize } from 'rxjs/operators';
import { AppOrganizationSkills, AppOrganizationEmployee, AppEmploymentStatus } from 'src/app/_models/organization/app-organization-employee-skills';
import { EmployeeSkillsRequestPagination, EmployeeSkillsResponsePagination, OrganizationEmpployeesSKillsFunctions } from './organization-employees-skills-functions';
import { UtilityProvider } from 'src/app/_providers/utility';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FilterEmployeesComponent } from 'src/app/shared/modals/organization/filter-employees/filter-employees.component';
import { User } from 'src/app/_models';
import { AppIndividualSkill } from 'src/app/_models/individual/individual-skill';
import { ShowSomeSkillsComponent } from 'src/app/shared/modals/user/show-some-skills/show-some-skills.component';

@Component({
  selector: 'app-organization-employees-skills',
  templateUrl: './organization-employees-skills.component.html',
  styleUrls: ['./organization-employees-skills.component.css']
})
export class OrganizationEmployeesSkillsComponent implements OnInit, OnDestroy {

  @Input() organization: AppOrganization;

  subscriptions: Subscription[] = [];

  loading = false;

  organizationSkills: AppOrganizationSkills;

  request: EmployeeSkillsRequestPagination;

  response: EmployeeSkillsResponsePagination = {} as EmployeeSkillsResponsePagination;

  employees: AppOrganizationEmployee[] = [];

  currentUser: User = {} as User;

  constructor(
    private organizationService: OrganizationService,
    public utility: UtilityProvider,
    private modalService: NgbModal
    ) { }

  ngOnInit() {
    this.setCurrentUser();
    this.initializeRequest();
    this.getSkills();
    this.getEmployees();
  }

  getSkills() {
    this.loading = true;
    const sub = this.organizationService.getOrganizationSkillsInfo({ organizationId: this.organization.id })
      .pipe(finalize(() => this.loading = false))
      .subscribe(x => {
        console.log(x.json());
        this.organizationSkills = x.json();
      });

    this.subscriptions.push(sub);
  }

  getEmployees() {
    this.loading = true;
    const sub = this.organizationService.getOrganizationEmployees(this.request)
      .pipe(finalize(() => this.loading = false))
      .subscribe(x => {
        this.response = x.json();
        this.employees = this.employees.concat(this.response.entities.map(e => new AppOrganizationEmployee(e)));
      },
        error => console.log(error.json())
      );

    this.subscriptions.push(sub);
  }

  initializeRequest() {
    this.request = {
      organizationId : this.organization.id,
      filter: {},
    } as EmployeeSkillsRequestPagination;

    this.request.filter.status = 'accepted' as AppEmploymentStatus;
  }

  avaliableFilter() {
    return OrganizationEmpployeesSKillsFunctions.avaliableFilter(this.request);
  }

  openFilterModal() {
    const modalRef = this.modalService.open(FilterEmployeesComponent, { size: 'lg' });
    modalRef.componentInstance.currentFilter = this.request.filter;

    const sub = modalRef.componentInstance.updatedFilter.subscribe(x => {
      this.request.filter = x;
      this.request.pageNumber = 1;
      this.employees = [];
      this.getEmployees();
    });

    this.subscriptions.push(sub);
  }

  isThereMoreEntities() {

    if (!this.response) { return false; }

    if (!this.response.totalItems) { return false; }

    return this.response.totalItems > this.employees.length;

  }

  loadMoreEntities() {
    this.request.pageNumber = this.request.pageNumber + 1;
    this.getEmployees();
  }

  setCurrentUser() {
    const sub = this.organizationService.currentUser.subscribe(x => {
      this.currentUser = new User(x);
    });
  }

  toggleAllowIndividualToSendRequest() {
    this.loading = true;
    const sub = this.organizationService.toggleAcceptIndividualRequest()
        .pipe(finalize(() => this.loading = false))
        .subscribe((x) => {
          this.response.allowRequest = x.json().accepting;
          if (this.response.allowRequest) {
            this.utility.showToast('success', 'Individual can now request to join organization');
          } else {
            this.utility.showToast('warning', 'Individual\'s request to join has been disabled');
          }
        },
          error => this.utility.showToast('danger', 'Failed to make changes at the moment')
        );
  }

  refreshEmployees() {
    this.employees = [];
    this.getEmployees();
  }

  showSkills(name: string, skills: AppIndividualSkill[]) {
    const modalRef = this.modalService.open(ShowSomeSkillsComponent);
    modalRef.componentInstance.userName = name;
    modalRef.componentInstance.skills = skills;
  }

  ngOnDestroy() {
    this.subscriptions.forEach(x => x.unsubscribe());
  }

}
