import { Component, OnInit, OnDestroy, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subject, Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/_services';
import { debounceTime, first } from 'rxjs/operators';

@Component({
  selector: 'app-register-as-individual',
  templateUrl: './register-as-individual.component.html',
  styleUrls: ['./register-as-individual.component.css']
})
  export class RegisterAsIndividualComponent implements OnInit, OnDestroy {
    signupForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    error = '';
    recoverform = false;
    registerCredentials = {
      firstName: '',
      lastName: '',
      emailAddress: '',
      password: '',
      password2: '',
      dateOfBirth: '',
    };

    // close all subscriptions
    subscriptions: Subscription[] = [];

    // Register as organization
    @Output() registerAsOrganization = new EventEmitter<any>();

  // End the Closeable Alert
  // This is for the self closing alert
  private _message = new Subject<string>();

  staticAlertClosed = false;
  uploadSuccess = false;
  responseMessage: string;
  messageType: any;

  constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService
  ) {
    // set up Alert
      setTimeout(() => (this.staticAlertClosed = true), 20000);

      this._message.subscribe(message => (this.responseMessage = message));
      this._message.pipe(debounceTime(5000)).subscribe(() => (this.responseMessage = null));
  }

  ngOnInit() {
      this.signupForm = this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        emailAddress: ['', Validators.required],
        dateOfBirth: ['', Validators.required],
        password: ['', Validators.required],
        password2: ['', Validators.required]
      });

      // get return url from route parameters or default to '/'
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  validEmail() {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(this.registerCredentials.emailAddress);
  }

    // convenience getter for easy access to form fields
    get f() { return this.signupForm.controls; }

    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.signupForm.invalid) {
            return;
        }
        this.registerCredentials.dateOfBirth = this.format(this.registerCredentials.dateOfBirth);

        console.log(this.registerCredentials);

        this.loading = true;
      const sub =  this.authenticationService.signup(this.registerCredentials)
            .pipe(first())
            .subscribe(
                data => {
                    this.registerCredentials = {
                                                firstName: '',
                                                lastName: '',
                                                emailAddress: '',
                                                password: '',
                                                password2: '',
                                                dateOfBirth: '',
                                            };
                    this.router.navigate(['/authentication/login']);
                },
                error => {
                	console.log(error);
                    // this.error = error;
                     // send alert
                  this.messageType = 'danger';
                  this._message.next(`iii`);
                  this.loading = false;
                });

        // track subscription to remove on destroy
        this.subscriptions.push(sub);
    }
    // format date from bootstrap date plugin
    format(str): string {
      return `${str.year}-${str.month}-${str.day}`;
    }

    registerAsOrganizationAction() {
      this.registerAsOrganization.emit();
    }

    ngOnDestroy() {
      this.subscriptions.forEach(x => x.unsubscribe());
    }

}
