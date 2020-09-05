import { Component, OnInit, EventEmitter, OnDestroy, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { OrganizationService } from 'src/app/_services/organization/organization.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GetViewLocationComponent } from 'src/app/shared/modals/get-view-location/get-view-location.component';
import { IAppAddress } from 'src/app/_entities/address/app-address';

@Component({
  selector: 'app-register-as-organization',
  templateUrl: './register-as-organization.component.html',
  styleUrls: ['./register-as-organization.component.css']
})
export class RegisterAsOrganizationComponent implements OnInit, OnDestroy {

  address: IAppAddress = {} as IAppAddress;

  // close all subscriptions
  subscriptions: Subscription[] = [];

  // Register as organization
  @Output() registerAsIndividual = new EventEmitter<any>();

  industries: string[] = [];

  constructor(
    private organizationService: OrganizationService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.getIndustries();
  }

  registerAsIndividualAction() {
    this.registerAsIndividual.emit();
  }

  getIndustries() {
    const sub = this.organizationService.getOrganizationIndustries()
      .subscribe((x) => {
        this.industries = x.json().industries;
      });

    this.subscriptions.push(sub);
  }

  getAddress() {
    const modalref =  this.modalService.open(GetViewLocationComponent);

    modalref.componentInstance.address = this.address;

    const sub = modalref.componentInstance.addressChanged.subscribe((x: IAppAddress) => {
      this.address = x;
    });

    this.subscriptions.push(sub);

  }

  displayAddress() {

    if (!this.address) { return null; }

    if (!this.address.country) {return null; }

    const postCode = this.address.postCode ? this.address.postCode : '';
    const street = this.address.street ? this.address.street : '';

    const fullAddress = `${this.address.country.name}, ${this.address.state.name} ${street} ${postCode}`;

    if (fullAddress.length <= 50) { return fullAddress; }

    return fullAddress.substring(0, 50) + ' ...';
  }

  ngOnDestroy() {
    this.subscriptions.forEach(x => x.unsubscribe());
  }

}
