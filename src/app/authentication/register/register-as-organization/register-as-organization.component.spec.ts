import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAsOrganizationComponent } from './register-as-organization.component';

describe('RegisterAsOrganizationComponent', () => {
  let component: RegisterAsOrganizationComponent;
  let fixture: ComponentFixture<RegisterAsOrganizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterAsOrganizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterAsOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
