import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOrganizationProblemsComponent } from './view-organization-problems.component';

describe('ViewOrganizationProblemsComponent', () => {
  let component: ViewOrganizationProblemsComponent;
  let fixture: ComponentFixture<ViewOrganizationProblemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewOrganizationProblemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOrganizationProblemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
