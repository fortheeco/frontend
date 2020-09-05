import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProblemComponent } from './create-problem.component';

describe('CreateProblemComponent', () => {
  let component: CreateProblemComponent;
  let fixture: ComponentFixture<CreateProblemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateProblemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
