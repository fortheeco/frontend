import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationAboutComponent } from './organization-about.component';

describe('OrganizationAboutComponent', () => {
  let component: OrganizationAboutComponent;
  let fixture: ComponentFixture<OrganizationAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
