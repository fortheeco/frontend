import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewUserAddressComponent } from './new-user-address.component';

describe('NewUserAddressComponent', () => {
  let component: NewUserAddressComponent;
  let fixture: ComponentFixture<NewUserAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewUserAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewUserAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
