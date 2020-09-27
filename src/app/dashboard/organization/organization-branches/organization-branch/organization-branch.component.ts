import { Component, OnInit, Input, OnDestroy, Output, EventEmitter } from '@angular/core';
import { AppOrganizationBranch } from 'src/app/_models/organization/app-organization-branch';
import { OrganizationService } from 'src/app/_services/organization/organization.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormErrorService } from 'src/app/_services/form-error/form-error.service';
import { Router } from '@angular/router';
import { UtilityProvider } from 'src/app/_providers/utility';
import { User } from 'src/app/_models';
import { Subscription } from 'rxjs';
import { ConfirmActionComponent } from 'src/app/shared/modals/confirm-action/confirm-action.component';
import { IConfirmAction } from 'src/app/shared/modals/confirm-action/ocnfirm-action-functions';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-organization-branch',
  templateUrl: './organization-branch.component.html',
  styleUrls: ['./organization-branch.component.css']
})
export class OrganizationBranchComponent implements OnInit, OnDestroy {

  @Input() branches: AppOrganizationBranch[] = [];

  @Input() isHeadQuarters = false;

  @Output() loading = new EventEmitter<boolean>();
  @Output() reload = new EventEmitter();

  currentUser: User = {} as User;

  subscriptions: Subscription[] = [];

  constructor(
    private organizationService: OrganizationService,
    private modalService: NgbModal,
    private formError: FormErrorService,
    public router: Router,
    private utility: UtilityProvider
  ) { }

  ngOnInit() {
  }

  setCurrentUser() {
    const sub = this.organizationService.currentUser.subscribe(x => {
      this.currentUser = new User(x);
    });

    this.subscriptions.push(sub);
  }

  confirmAcceptOrganization(branch: AppOrganizationBranch) {
    const modelRef = this.modalService.open(ConfirmActionComponent);
    modelRef.componentInstance.confirmData = {
      title: `Accept Organization request`,
      body: `Are you sure you want to accept ${branch.organizationName}'s request to join your organization as a branch`,
      button: 'btn btn-rounded bg-success text-white',
      buttonText: 'Accept'
     } as IConfirmAction;

    const sub = modelRef.componentInstance.action.subscribe((x: boolean) => {
      if (x) {
        this.answerOrganiation(branch, true);
      }
    });

    this.subscriptions.push(sub);
  }

  confirmRejectOrganization(branch: AppOrganizationBranch) {
    const modelRef = this.modalService.open(ConfirmActionComponent);
    modelRef.componentInstance.confirmData = {
      title: `Reject Organization request`,
      body: `Are you sure you want to reject ${branch.organizationName}'s request to join your organization as a branch`,
      button: 'btn btn-rounded bg-danger text-white',
      buttonText: 'Reject'
     } as IConfirmAction;

    const sub = modelRef.componentInstance.action.subscribe((x: boolean) => {
      if (x) {
        this.answerOrganiation(branch, false);
      }
    });

    this.subscriptions.push(sub);
  }

  private answerOrganiation(branch: AppOrganizationBranch, decision: boolean) {
    this.loading.emit(true);
    // console.log(branch);
    const sub = this.organizationService.answerOrganization({ organizationId: branch.organizationId, acceptOrganization: decision })
      .pipe(finalize(() => this.loading.emit(false)))
      .subscribe((x: any) => {
        this.branches = [];
        this.utility.showToast('success', 'Request processed');
        this.reload.emit();
    },
      error => this.formError.setFormErrors(error.json(), null)
    );

    this.subscriptions.push(sub);
  }

  confirmRemoveBranch(branch: AppOrganizationBranch) {
    const modelRef = this.modalService.open(ConfirmActionComponent);
    modelRef.componentInstance.confirmData = {
      title: `Rmove branch from organization`,
      body: `Are you sure you want to remove ${branch.organizationName} as a branch`,
      button: 'btn btn-rounded bg-danger text-white',
      buttonText: 'Remove'
     } as IConfirmAction;

    const sub = modelRef.componentInstance.action.subscribe((x: boolean) => {
      if (x) {
        this.removeBranch(branch);
      }
    });

    this.subscriptions.push(sub);
  }

  private removeBranch(branch: AppOrganizationBranch) {
    this.loading.emit(true);
    console.log(branch);
    const sub = this.organizationService.removeBranch({ organizationId: branch.organizationId })
      .pipe(finalize(() => this.loading.emit(false)))
      .subscribe((x: any) => {
        this.branches = [];
        this.utility.showToast('success', 'Removed successfully');
        this.reload.emit();
    },
      error => this.formError.setFormErrors(error.json(), null)
    );

    this.subscriptions.push(sub);
  }

  navigate(url: string) {
    this.router.navigate([url]).then(() => window.location.reload());
  }

  ngOnDestroy() {
    this.subscriptions.forEach(x => x.unsubscribe());
  }

}
