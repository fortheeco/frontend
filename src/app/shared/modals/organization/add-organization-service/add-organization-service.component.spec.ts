import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrganizationServiceComponent } from './add-organization-service.component';

describe('AddOrganizationServiceComponent', () => {
  let component: AddOrganizationServiceComponent;
  let fixture: ComponentFixture<AddOrganizationServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOrganizationServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrganizationServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
