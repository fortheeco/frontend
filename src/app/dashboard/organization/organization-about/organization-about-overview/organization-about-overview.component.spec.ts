import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationAboutOverviewComponent } from './organization-about-overview.component';

describe('OrganizationAboutOverviewComponent', () => {
  let component: OrganizationAboutOverviewComponent;
  let fixture: ComponentFixture<OrganizationAboutOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationAboutOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationAboutOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
