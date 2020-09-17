import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserContactComponent } from './add-user-contact.component';

describe('AddUserContactComponent', () => {
  let component: AddUserContactComponent;
  let fixture: ComponentFixture<AddUserContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUserContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
