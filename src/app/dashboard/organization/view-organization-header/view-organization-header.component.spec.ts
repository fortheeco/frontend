import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOrganizationHeaderComponent } from './view-organization-header.component';

describe('ViewOrganizationHeaderComponent', () => {
  let component: ViewOrganizationHeaderComponent;
  let fixture: ComponentFixture<ViewOrganizationHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewOrganizationHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOrganizationHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
