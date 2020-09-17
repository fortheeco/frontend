import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditOrganizationAboutComponent } from 'src/app/shared/modals/organization/edit-organization-about/edit-organization-about.component';
import { AppOrganization } from 'src/app/_models/organization/app-organization';
import { Subscription } from 'rxjs';
import { AppOrganizationetails } from 'src/app/_models/organization/app-organization-detail';
import { ApplicationConstant } from 'src/app/_models/app-constant';
import { User } from 'src/app/_models';
import { UserService } from 'src/app/_services';

@Component({
  selector: 'app-organization-about-overview',
  templateUrl: './organization-about-overview.component.html',
  styleUrls: ['./organization-about-overview.component.css']
})
export class OrganizationAboutOverviewComponent implements OnInit, OnDestroy {

  @Input() organization: AppOrganization;

  subscriptions: Subscription[] = [];

  organizationTye = ApplicationConstant.organizationType;

  currentUser: User = {} as User;

  constructor(
    private modalService: NgbModal,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.setCurrentUser();
  }

  setCurrentUser() {
    const sub = this.userService.currentUser.subscribe(x => {
      this.currentUser = new User(x);
    });
  }


  openEditOeganizationModal() {
    const modalRef = this.modalService.open(EditOrganizationAboutComponent, { size: 'lg' });
    modalRef.componentInstance.organization = this.organization;

    const sub = modalRef.componentInstance.editedOrganization.subscribe((x: AppOrganizationetails) => {
      this.organization.detail = x;
    });

    this.subscriptions.push(sub);
  }


  ngOnDestroy() {
    this.subscriptions.forEach(x => x.unsubscribe());
  }

}
