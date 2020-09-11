import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserContactAddressesComponent } from './user-contact-addresses.component';

describe('UserContactAddressesComponent', () => {
  let component: UserContactAddressesComponent;
  let fixture: ComponentFixture<UserContactAddressesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserContactAddressesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserContactAddressesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
