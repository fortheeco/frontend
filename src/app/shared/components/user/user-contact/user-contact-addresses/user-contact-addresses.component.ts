import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { UserService } from 'src/app/_services';
import { Subscription } from 'rxjs';
import { ApplicationRequestPagination, ApplicationResponsePagination } from 'src/app/_models/iheritable/app-pagination';
import { EntityAddress } from 'src/app/_models/address/entity-address';
import { UserContactAddressesRequestPagination, IFreeAddresses } from './user-contact-addresses-functions';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewUserAddressComponent } from 'src/app/shared/modals/user/new-user-address/new-user-address.component';
import { EditUserAddressComponent } from 'src/app/shared/modals/user/edit-user-address/edit-user-address.component';
import { User } from 'src/app/_models';
import { NewFreeUserAddressFunctions } from 'src/app/shared/modals/user/add-free-addresses/add-free-address-functions';
import { AddFreeAddressesComponent } from 'src/app/shared/modals/user/add-free-addresses/add-free-addresses.component';
import { ConfirmActionComponent } from 'src/app/shared/modals/confirm-action/confirm-action.component';
import { IConfirmAction } from 'src/app/shared/modals/confirm-action/ocnfirm-action-functions';
import { FormErrorService } from 'src/app/_services/form-error/form-error.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-user-contact-addresses',
  templateUrl: './user-contact-addresses.component.html',
  styleUrls: ['./user-contact-addresses.component.css']
})
export class UserContactAddressesComponent implements OnInit, OnDestroy {

  @Input() userId: string;

  subscriptions: Subscription[] = [];

  request: UserContactAddressesRequestPagination = {} as UserContactAddressesRequestPagination;
  response: ApplicationResponsePagination<EntityAddress> = {}  as ApplicationResponsePagination<EntityAddress>;

  addresses: EntityAddress[] = [];

  currentUser: User = {} as User;

  freeAddresses: IFreeAddresses;

  loading = false;
  deleting = false;

  constructor(
    private userService: UserService,
    private modalService: NgbModal,
    private formError: FormErrorService
  ) { }

  ngOnInit() {
    this.request.userId = this.userId;
    this.setCurrentUser();
    this.getAddresses();
    this.getAvaliableFreeAddress();
  }

  setCurrentUser() {
    const sub = this.userService.currentUser.subscribe(x => {
      this.currentUser = new User(x);
    });
  }

  getAddresses() {
    this.request.pageSize = 20;
    this.loading = true;
    const sub = this.userService.getUserAddresses(this.request)
      .pipe(finalize(() => this.loading = false))
      .subscribe(x => {
        this.response = x.json() as ApplicationResponsePagination<EntityAddress>;
        this.addresses = this.addresses.concat(this.response.entities.map(addr => new EntityAddress(addr)));
      });

    this.subscriptions.push(sub);
  }

  getAvaliableFreeAddress() {
    const sub = this.userService.getAvaliableFreeAddress()
      .subscribe(x => {
        this.freeAddresses = x.json();
      });
  }

  isThereEmptyFreeAddresses() {
    if (!this.freeAddresses) { return false; }

    if (this.freeAddresses.localAddress && this.freeAddresses.globalAddress) { return false; }

    return true;

  }

  openNewAddressModal() {
    const modalRef = this.modalService.open(NewUserAddressComponent, { size: 'lg' });

    const sub = modalRef.componentInstance.newAddress.subscribe(x => {
      this.addresses.unshift(new EntityAddress(x));
    });

    this.subscriptions.push(sub);
  }

  openNewFreeAddressModal() {
    const modalRef = this.modalService.open(AddFreeAddressesComponent, { size: 'lg' });
    modalRef.componentInstance.freeAddresses = this.freeAddresses;

    const sub = modalRef.componentInstance.newAddress.subscribe(x => {
      this.addresses.unshift(new EntityAddress(x));
      this.isThereEmptyFreeAddresses();
    });

    this.subscriptions.push(sub);
  }

  openEditUserAddress(entityAddress: EntityAddress) {
    const modalRef = this.modalService.open(EditUserAddressComponent, { size: 'lg' });
    modalRef.componentInstance.entityAddress = entityAddress;

    const sub = modalRef.componentInstance.updatedAddress.subscribe((x: EntityAddress) => {
      const newData = new EntityAddress(x);
      entityAddress.postCode = newData.postCode;
      entityAddress.country = newData.country;
      entityAddress.state = newData.state;
      entityAddress.street = newData.street;
      entityAddress.nextChange = newData.nextChange;
      // entityAddress.
      // console.log(entityAddress);
    });

    this.subscriptions.push(sub);
  }

  confirmRemoveContact(item: EntityAddress) {
    const modelRef = this.modalService.open(ConfirmActionComponent);
    modelRef.componentInstance.confirmData = {
      title: `Delete Address`,
      body: `Are you sure you really want to delete '${item.displayAddress()}'.
      Kindly note that address with an active payment cannot be delete`,
      button: 'btn btn-rounded bg-danger text-white',
      buttonText: 'Delete'
     } as IConfirmAction;

    const sub = modelRef.componentInstance.action.subscribe((x: boolean) => {
    if (x) {
      this.removeContact(item);
    }
    });

    this.subscriptions.push(sub);
  }

  private removeContact(item: EntityAddress) {
    this.deleting = true;
    const sub = this.userService.removeUserAddress({addressId: item.id})
      .pipe(finalize(() => this.deleting = false))
      .subscribe((x: any) => {
      this.addresses = this.addresses.filter(c => c.id !== item.id);
    },
      error => this.formError.setFormErrors(error.json(), null)
    );

    this.subscriptions.push(sub);
  }

  isThereMoreAddresses() {
    if (!this.response) { return false; }

    if (!this.response.entities) { return false; }

    return this.response.totalItems > this.addresses.length;
    // return true;
  }

  getMoreAddresses() {
    this.request.pageNumber = this.response.pageNumber + 1;
    this.getAddresses();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(x => x.unsubscribe());
  }

}
