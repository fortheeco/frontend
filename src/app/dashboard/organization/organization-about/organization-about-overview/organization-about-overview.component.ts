import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditOrganizationAboutComponent } from 'src/app/shared/modals/organization/edit-organization-about/edit-organization-about.component';
import { AppOrganization } from 'src/app/_models/organization/app-organization';
import { Subscription } from 'rxjs';
import { AppOrganizationetails } from 'src/app/_models/organization/app-organization-detail';
import { ApplicationConstant } from 'src/app/_models/app-constant';

@Component({
  selector: 'app-organization-about-overview',
  templateUrl: './organization-about-overview.component.html',
  styleUrls: ['./organization-about-overview.component.css']
})
export class OrganizationAboutOverviewComponent implements OnInit, OnDestroy {

  @Input() organization: AppOrganization;

  subscriptions: Subscription[] = [];

  organizationTye = ApplicationConstant.organizationType;

  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit() {
  }

  openEditOeganizationModal() {
    const modalRef = this.modalService.open(EditOrganizationAboutComponent, { size: 'lg' });
    modalRef.componentInstance.organization = this.organization;

    const sub = modalRef.componentInstance.editedOrganization.subscribe((x: AppOrganizationetails) => {
      this.organization.detail = x;
    });
  }


  ngOnDestroy() {
    this.subscriptions.forEach(x => x.unsubscribe());
  }

}
