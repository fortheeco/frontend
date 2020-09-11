import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOrganizationAboutComponent } from './edit-organization-about.component';

describe('EditOrganizationAboutComponent', () => {
  let component: EditOrganizationAboutComponent;
  let fixture: ComponentFixture<EditOrganizationAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditOrganizationAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditOrganizationAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
