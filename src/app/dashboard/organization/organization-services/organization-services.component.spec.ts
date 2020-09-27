import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationServicesComponent } from './organization-services.component';

describe('OrganizationServicesComponent', () => {
  let component: OrganizationServicesComponent;
  let fixture: ComponentFixture<OrganizationServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
