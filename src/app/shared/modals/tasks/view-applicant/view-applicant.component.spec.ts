import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewApplicantComponent } from './view-applicant.component';

describe('ViewApplicantComponent', () => {
  let component: ViewApplicantComponent;
  let fixture: ComponentFixture<ViewApplicantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewApplicantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewApplicantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
