import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/_services';
import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css']
})
export class VerifyEmailComponent implements OnInit, OnDestroy {

  token: string;
  userId: string;

  verified = 'pending';

  loading = false;

  subscriptions: Subscription[] = [];

  constructor(
    private route: ActivatedRoute,
    private auth: AuthenticationService
    ) { }

  ngOnInit() {
    this.setValues();
  }

  setValues() {
    this.token = this.route.snapshot.queryParamMap.get('token');
    this.userId = this.route.snapshot.queryParamMap.get('userId');
    this.tryVerification();
  }

  tryVerification() {

    if (!this.token || !this.userId) { this.verified = 'failed'; return; }

    this.loading = true;

    const sub = this.auth.verifyEmailAddress({token: this.token, userId: this.userId})
      .pipe(finalize(() => this.loading = false ))
      .subscribe(x => {
        this.loading = false;

        const success = x.json().success;
        if (success) {
          this.verified = 'success';
        } else {
          this.verified = 'failed';
        }
      },
        error => {
          this.loading = false;
          this.verified = 'failed';
        }
      );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(x => x.unsubscribe());
  }

}
