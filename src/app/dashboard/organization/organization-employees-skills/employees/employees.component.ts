import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { AppOrganizationEmployee, AppEmploymentStatus } from 'src/app/_models/organization/app-organization-employee-skills';
import { OrganizationService } from 'src/app/_services/organization/organization.service';
import { UtilityProvider } from 'src/app/_providers/utility';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/_models';
import { AppOrganization } from 'src/app/_models/organization/app-organization';
import { AcceptEmployeeComponent } from 'src/app/shared/modals/organization/accept-employee/accept-employee.component';
import { Subscription } from 'rxjs';
import { ConfirmActionComponent } from 'src/app/shared/modals/confirm-action/confirm-action.component';
import { IConfirmAction } from 'src/app/shared/modals/confirm-action/ocnfirm-action-functions';
import { finalize } from 'rxjs/operators';
import { FormErrorService } from 'src/app/_services/form-error/form-error.service';
import { AppIndividualSkill } from 'src/app/_models/individual/individual-skill';
import { ShowSomeSkillsComponent } from 'src/app/shared/modals/user/show-some-skills/show-some-skills.component';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit, OnDestroy {

  currentUser: User;

  @Input() organization: AppOrganization;
  @Input() status: AppEmploymentStatus;
  @Input() employees: AppOrganizationEmployee[] = [];

  @Output() reload = new EventEmitter();

  subscriptions: Subscription[] = [];

  @Output() loading = new EventEmitter();

  constructor(
      private organizationService: OrganizationService,
      public utility: UtilityProvider,
      private modalService: NgbModal,
      private formError: FormErrorService
    ) { }

  ngOnInit() {
    this.setCurrentUser();
  }

  setCurrentUser() {
    const sub = this.organizationService.currentUser.subscribe(x => {
      this.currentUser = new User(x);
    });
  }

  acceptEmployee(employee: AppOrganizationEmployee) {
    const modalRef = this.modalService.open(AcceptEmployeeComponent);
    modalRef.componentInstance.employee = employee;

    const sub = modalRef.componentInstance.completed.subscribe(x => {
      this.reload.emit();
    });

    this.subscriptions.push(sub);
  }

  confirmRejectEmployee(item: AppOrganizationEmployee) {
    const modelRef = this.modalService.open(ConfirmActionComponent);
    modelRef.componentInstance.confirmData = {
      title: `Reject Employee's Request to join`,
      body: `Are you sure you really want to reject "${item.fullName}'s" request to join the organization'`,
      button: 'btn btn-rounded bg-danger text-white',
      buttonText: 'Reject'
     } as IConfirmAction;

    const sub = modelRef.componentInstance.action.subscribe((x: boolean) => {
    if (x) {
      this.rejectEmployee(item);
    }
    });

    this.subscriptions.push(sub);
  }

  private rejectEmployee(item: AppOrganizationEmployee) {
    this.loading.emit(true);
    const sub = this.organizationService.acceptOrRejectEmployee({ acceptIndividual: false, ...item })
      .pipe(finalize(() => this.loading.emit(false)))
      .subscribe((x: any) => {
        this.reload.emit();
      },
      error => this.formError.setFormErrors(error.json(), null)
    );

    this.subscriptions.push(sub);
  }

  confirmRemoveEmployee(item: AppOrganizationEmployee) {
    const modelRef = this.modalService.open(ConfirmActionComponent);
    modelRef.componentInstance.confirmData = {
      title: `Remove Employee`,
      body: `Are you sure you really want to remove "${item.fullName}" from the organization?`,
      button: 'btn btn-rounded bg-danger text-white',
      buttonText: 'Delete'
     } as IConfirmAction;

    const sub = modelRef.componentInstance.action.subscribe((x: boolean) => {
    if (x) {
      this.removeEmployee(item);
    }
    });

    this.subscriptions.push(sub);
  }

  private removeEmployee(item: AppOrganizationEmployee) {
    this.loading.emit(true);
    const sub = this.organizationService.terminateProfession({ professionId: item.professionId })
      .pipe(finalize(() => this.loading.emit(false)))
      .subscribe((x: any) => {
        this.reload.emit();
      },
      error => this.formError.setFormErrors(error.json(), null)
    );

    this.subscriptions.push(sub);
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
