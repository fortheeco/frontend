import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUserCvComponent } from './view-user-cv.component';

describe('ViewUserCvComponent', () => {
  let component: ViewUserCvComponent;
  let fixture: ComponentFixture<ViewUserCvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewUserCvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewUserCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
