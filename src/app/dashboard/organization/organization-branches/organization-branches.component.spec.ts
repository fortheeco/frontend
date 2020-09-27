import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationBranchesComponent } from './organization-branches.component';

describe('OrganizationBranchesComponent', () => {
  let component: OrganizationBranchesComponent;
  let fixture: ComponentFixture<OrganizationBranchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationBranchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationBranchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
