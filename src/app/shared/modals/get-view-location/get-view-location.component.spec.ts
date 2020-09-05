import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetViewLocationComponent } from './get-view-location.component';

describe('GetViewLocationComponent', () => {
  let component: GetViewLocationComponent;
  let fixture: ComponentFixture<GetViewLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetViewLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetViewLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
