import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserContactCommunicateComponent } from './user-contact-communicate.component';

describe('UserContactCommunicateComponent', () => {
  let component: UserContactCommunicateComponent;
  let fixture: ComponentFixture<UserContactCommunicateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserContactCommunicateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserContactCommunicateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
