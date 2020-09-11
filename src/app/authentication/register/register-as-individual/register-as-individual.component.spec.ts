import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAsIndividualComponent } from './register-as-individual.component';

describe('RegisterAsIndividualComponent', () => {
  let component: RegisterAsIndividualComponent;
  let fixture: ComponentFixture<RegisterAsIndividualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterAsIndividualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterAsIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
