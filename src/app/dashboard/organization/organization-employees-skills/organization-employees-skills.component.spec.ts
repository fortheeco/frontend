import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationEmployeesSkillsComponent } from './organization-employees-skills.component';

describe('OrganizationEmployeesSkillsComponent', () => {
  let component: OrganizationEmployeesSkillsComponent;
  let fixture: ComponentFixture<OrganizationEmployeesSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationEmployeesSkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationEmployeesSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
