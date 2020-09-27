import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { AppOrganization } from 'src/app/_models/organization/app-organization';
import { OrganizationService } from 'src/app/_services/organization/organization.service';
import { User } from 'src/app/_models';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IAppOrganizationService } from 'src/app/_models/organization/app-organization-service';
import { Subscription } from 'rxjs';
import { OrganizationServiceRequestPagination } from './organization-service-functions';
import { ApplicationResponsePagination } from 'src/app/_models/iheritable/app-pagination';
import { finalize } from 'rxjs/operators';
import { AddOrganizationServiceComponent } from 'src/app/shared/modals/organization/add-organization-service/add-organization-service.component';
import { ConfirmActionComponent } from 'src/app/shared/modals/confirm-action/confirm-action.component';
import { IConfirmAction } from 'src/app/shared/modals/confirm-action/ocnfirm-action-functions';
import { FormErrorService } from 'src/app/_services/form-error/form-error.service';

@Component({
  selector: 'app-organization-services',
  templateUrl: './organization-services.component.html',
  styleUrls: ['./organization-services.component.css']
})
export class OrganizationServicesComponent implements OnInit, OnDestroy {

  @Input() organization: AppOrganization;

  currentUser: User = {} as User;

  subscriptions: Subscription[] = [];

  organizationServices: IAppOrganizationService[] = [];

  loadingService = false;
  deleting = false;

  serviceSearchWord: string;

  request: OrganizationServiceRequestPagination = {} as OrganizationServiceRequestPagination;
  response: ApplicationResponsePagination<IAppOrganizationService> = {}  as ApplicationResponsePagination<IAppOrganizationService>;

  constructor(
    private organizationService: OrganizationService,
    private modalService: NgbModal,
    private formError: FormErrorService
  ) { }

  ngOnInit() {
    this.request.organizationId = this.organization.id;
    this.setCurrentUser();
    this.getOrganizationServices();
  }

  setCurrentUser() {
    const sub = this.organizationService.currentUser.subscribe(x => {
      this.currentUser = new User(x);
    });

    this.subscriptions.push(sub);
  }

  getOrganizationServices() {
    this.loadingService = true;
    this.request.pageSize = 50;

    const sub = this.organizationService.getOrganizationServices(this.request)
      .pipe(finalize(() => this.loadingService = false))
      .subscribe(x => {
        this.response = x.json() as ApplicationResponsePagination<IAppOrganizationService>;
        this.organizationServices = this.organizationServices.concat(this.response.entities);
      });

    this.subscriptions.push(sub);

  }

  openAddOrganizationService() {

    const modalRef = this.modalService.open(AddOrganizationServiceComponent, { size: 'lg' });

    const sub = modalRef.componentInstance.newOrganizationService.subscribe(x => {
      this.organizationServices.unshift(x);
    });

    this.subscriptions.push(sub);

  }

  confirmRemoveService(item: IAppOrganizationService) {
    const modelRef = this.modalService.open(ConfirmActionComponent);
    modelRef.componentInstance.confirmData = {
      title: `Delete Service`,
      body: `Are you sure you really want to delete "${item.name}". All verifications for this service will be lost`,
      button: 'btn btn-rounded bg-danger text-white',
      buttonText: 'Delete'
     } as IConfirmAction;

    const sub = modelRef.componentInstance.action.subscribe((x: boolean) => {
    if (x) {
      this.removeService(item);
    }
    });

    this.subscriptions.push(sub);
  }

  private removeService(item: IAppOrganizationService) {
    this.loadingService = true;
    const sub = this.organizationService.removeOrganizationService({serviceId: item.serviceId})
      .pipe(finalize(() => this.loadingService = false))
      .subscribe((x: any) => {
      this.organizationServices = this.organizationServices.filter(c => c.serviceId !== item.serviceId);
    },
      error => this.formError.setFormErrors(error.json(), null)
    );

    this.subscriptions.push(sub);
  }

  searchForService() {
    this.request.filter = { serviceName: this.serviceSearchWord };
    this.request.pageNumber = 1;

    this.organizationServices = [];

    this.getOrganizationServices();
  }

  clearSearchWord() {
    this.request.filter = null;
    this.request.pageNumber = 1;

    this.organizationServices = [];

    this.getOrganizationServices();
  }

  isThereMoreServices() {

    if (!this.response) { return false; }

    return this.response.totalItems > this.organizationServices.length;

  }

  loadMoreServices() {
    this.request.pageNumber = this.response.pageNumber + 1;
    this.getOrganizationServices();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(x => x.unsubscribe());
  }

}
