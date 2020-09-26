import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterOrganizationBranchesComponent } from './filter-organization-branches.component';

describe('FilterOrganizationBranchesComponent', () => {
  let component: FilterOrganizationBranchesComponent;
  let fixture: ComponentFixture<FilterOrganizationBranchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterOrganizationBranchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterOrganizationBranchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
