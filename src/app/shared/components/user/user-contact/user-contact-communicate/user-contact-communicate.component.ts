import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/_services';
import { IAppContacts, IContact } from 'src/app/_models/users/app-contacts';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddUserContactComponent } from 'src/app/shared/modals/user/add-user-contact/add-user-contact.component';
import { FormErrorService } from 'src/app/_services/form-error/form-error.service';
import { ConfirmActionComponent } from 'src/app/shared/modals/confirm-action/confirm-action.component';
import { IConfirmAction } from 'src/app/shared/modals/confirm-action/ocnfirm-action-functions';
import { User } from 'src/app/_models';

@Component({
  selector: 'app-user-contact-communicate',
  templateUrl: './user-contact-communicate.component.html',
  styleUrls: ['./user-contact-communicate.component.css']
})
export class UserContactCommunicateComponent implements OnInit, OnDestroy {

  @Input() userId: string;

  subscriptions: Subscription[] = [];

  userContacts: IAppContacts = {} as IAppContacts;

  currentUser: User = {} as User;

  constructor(
    private userService: UserService,
    private modalService: NgbModal,
    private formError: FormErrorService
  ) { }

  ngOnInit() {
    this.setCurrentUser();
    this.getUserContacts();
  }

  setCurrentUser() {
    const sub = this.userService.currentUser.subscribe(x => {
      this.currentUser = new User(x);
    });
  }

  getUserContacts() {

    const sub = this.userService.getUserContact({id: this.userId})
      .subscribe((x) => {
        this.userContacts = x.json() as IAppContacts;
      });

    this.subscriptions.push(sub);
  }

  addNewContact() {
    // this.formError.genericError = null;
    const modelRef = this.modalService.open(AddUserContactComponent, { size: 'lg' });

    const sub = modelRef.componentInstance.addedContact.subscribe((x: IContact) => {
      this.userContacts.contacts.push(x);
      console.log(x);
    });

    this.subscriptions.push(sub);
  }

  confirmRemoveContact(item: IContact) {
    const modelRef = this.modalService.open(ConfirmActionComponent);
    modelRef.componentInstance.confirmData = {
      title: `Delete Contact`,
      body: `Are you sure you really want to delete ${item.value}`,
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

  private removeContact(item: IContact) {
    const sub = this.userService.removeUserContact({contactId: item.id}).subscribe((x: any) => {
      this.userContacts.contacts = this.userContacts.contacts.filter(c => c.id !== item.id);
    },
      error => this.formError.setFormErrors(error.json(), null)
    );

    this.subscriptions.push(sub);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(x => x.unsubscribe());
  }
}
