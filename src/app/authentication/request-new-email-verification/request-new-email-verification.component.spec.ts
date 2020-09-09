import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestNewEmailVerificationComponent } from './request-new-email-verification.component';

describe('RequestNewEmailVerificationComponent', () => {
  let component: RequestNewEmailVerificationComponent;
  let fixture: ComponentFixture<RequestNewEmailVerificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestNewEmailVerificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestNewEmailVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
