import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationCommunityComponent } from './organization-community.component';

describe('OrganizationCommunityComponent', () => {
  let component: OrganizationCommunityComponent;
  let fixture: ComponentFixture<OrganizationCommunityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationCommunityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationCommunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
