import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationAboutStatisticsComponent } from './organization-about-statistics.component';

describe('OrganizationAboutStatisticsComponent', () => {
  let component: OrganizationAboutStatisticsComponent;
  let fixture: ComponentFixture<OrganizationAboutStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationAboutStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationAboutStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
