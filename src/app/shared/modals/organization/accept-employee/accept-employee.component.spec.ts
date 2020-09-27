import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptEmployeeComponent } from './accept-employee.component';

describe('AcceptEmployeeComponent', () => {
  let component: AcceptEmployeeComponent;
  let fixture: ComponentFixture<AcceptEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
