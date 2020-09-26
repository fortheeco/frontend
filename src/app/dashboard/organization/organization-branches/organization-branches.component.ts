import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/_models';
import { OrganizationService } from 'src/app/_services/organization/organization.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormErrorService } from 'src/app/_services/form-error/form-error.service';
import { finalize } from 'rxjs/operators';
import { OrganizationBranchRequestPagination, OrganizationBranchResponsePagination, OrganizationBranchFilter, OrganizationBranchesFunctions } from './organization-branches-functions';
import { AppOrganizationBranch } from 'src/app/_models/organization/app-organization-branch';
import { JoinOrganizationComponent } from 'src/app/shared/modals/organization/join-organization/join-organization.component';
import { IConfirmAction } from 'src/app/shared/modals/confirm-action/ocnfirm-action-functions';
import { ConfirmActionComponent } from 'src/app/shared/modals/confirm-action/confirm-action.component';
import { FilterOrganizationBranchesComponent } from 'src/app/shared/modals/organization/filter-organization-branches/filter-organization-branches.component';
import { Router } from '@angular/router';
import { UtilityProvider } from 'src/app/_providers/utility';

@Component({
  selector: 'app-organization-branches',
  templateUrl: './organization-branches.component.html',
  styleUrls: ['./organization-branches.component.css']
})
export class OrganizationBranchesComponent implements OnInit, OnDestroy {

  subscriptions: Subscription[] = [];

  @Input() organizationId: string;

  currentUser: User = {} as User;

  loading = false;

  request: OrganizationBranchRequestPagination = {} as OrganizationBranchRequestPagination;
  response: OrganizationBranchResponsePagination = {} as OrganizationBranchResponsePagination;

  branches: AppOrganizationBranch[] = [];

  isHeadQuarters = false;

  filters: {name: string, value: string}[] = [];

  constructor(
    private organizationService: OrganizationService,
    private modalService: NgbModal,
    private formError: FormErrorService,
    public router: Router,
    private utility: UtilityProvider
  ) { }

  ngOnInit() {
    this.setCurrentUser();
    this.initializeRequest();
    this.getBranches();
  }

  setCurrentUser() {
    const sub = this.organizationService.currentUser.subscribe(x => {
      this.currentUser = new User(x);
    });

    this.subscriptions.push(sub);
  }

  initializeRequest() {
    this.request.organizationId = this.organizationId;
    this.request.filter = {
      accepted : true
    } as OrganizationBranchFilter;
    this.filters = OrganizationBranchesFunctions.avaliableFilter(this.request.filter);
  }

  getBranches() {
    this.loading = true;
    const sub = this.organizationService.getBranches(this.request)
      .pipe(finalize(() => this.loading = false))
      .subscribe(x => {
        this.response = x.json();
        this.branches = this.branches.concat(this.response.entities.map(b => new AppOrganizationBranch(b)));
        this.checkIsHeadQuarters(this.branches[0]);
        // console.log(this.branches);
      });

    this.subscriptions.push(sub);
  }

  isThereMoreEntities() {

    if (!this.response) { return false; }

    if (!this.response.totalItems) { return false; }

    return this.response.totalItems > this.branches.length;
  }

  loadMoreEntities() {
    this.request.pageNumber = this.request.pageNumber + 1;
    this.getBranches();
  }


  checkIsHeadQuarters(organization: AppOrganizationBranch) {
    this.isHeadQuarters = organization ? organization.headQuarterId === this.organizationId : false;
  }

  openJoinOrganization() {
    const modalRef = this.modalService.open(JoinOrganizationComponent, { size: 'lg' });

    const sub = modalRef.componentInstance.searchedOrganization.subscribe(x => {
      this.branches = [];
      this.getBranches();
    });
  }

  confirmLeaveOrganization() {
    const modelRef = this.modalService.open(ConfirmActionComponent);
    modelRef.componentInstance.confirmData = {
      title: `Leave Organization`,
      body: `Are you sure you want to leave yout current organization and become independent`,
      button: 'btn btn-rounded bg-danger text-white',
      buttonText: 'Leave'
     } as IConfirmAction;

    const sub = modelRef.componentInstance.action.subscribe((x: boolean) => {
      if (x) {
        this.leaveOrganization();
      }
    });

    this.subscriptions.push(sub);
  }

  private leaveOrganization() {
    this.loading = true;
    const sub = this.organizationService.leaveOrganization()
      .pipe(finalize(() => this.loading = false))
      .subscribe((x: any) => {
        this.branches = [];
        this.utility.showToast('success', 'You are no longer a branch');
        this.getBranches();
    },
      error => this.formError.setFormErrors(error.json(), null)
    );

    this.subscriptions.push(sub);
  }

  openFilterModal() {
    const modalRef = this.modalService.open(FilterOrganizationBranchesComponent, { size: 'lg' });
    modalRef.componentInstance.currentFilter = this.request.filter;

    const sub = modalRef.componentInstance.updatedFilter.subscribe((x: OrganizationBranchFilter) => {
      this.request.filter = x;
      this.filters = OrganizationBranchesFunctions.avaliableFilter(this.request.filter);
      this.branches = [];
      this.getBranches();
    });

    this.subscriptions.push(sub);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(x => x.unsubscribe());
  }

}
