import { Component, OnInit, OnDestroy, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AddUserContactFunctions } from './add-user-ocntact-functions';
import { UserService } from 'src/app/_services';
import { finalize } from 'rxjs/operators';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormErrorService } from 'src/app/_services/form-error/form-error.service';
import { IContact } from 'src/app/_models/users/app-contacts';

@Component({
  selector: 'app-add-user-contact',
  templateUrl: './add-user-contact.component.html',
  styleUrls: ['./add-user-contact.component.css']
})
export class AddUserContactComponent implements OnInit, OnDestroy {

  addUserContactForm: FormGroup;

  addedContact = new EventEmitter<IContact>();

  loading = false;

  subscriptions: Subscription[] = [];

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    public activeModal: NgbActiveModal,
    public formError: FormErrorService
  ) { }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.addUserContactForm = AddUserContactFunctions.createForm(this.fb);
  }

  addContact() {

    if (this.addUserContactForm.invalid) { this.formError.validateAllFields(this.addUserContactForm); return; }

    this.loading = true;

    const sub = this.userService.addUserContact(this.addUserContactForm.value)
      .pipe(finalize(() => this.loading = false))
      .subscribe(x => {
        this.addedContact.emit(x.json());
        this.activeModal.close();
      },
        error => this.formError.setFormErrors(error.json(), this.addUserContactForm)
      );

    this.subscriptions.push(sub);

  }

  ngOnDestroy() {
    this.subscriptions.forEach(x => x.unsubscribe());
  }
}
