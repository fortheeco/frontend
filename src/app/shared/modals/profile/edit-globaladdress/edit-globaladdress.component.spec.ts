import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGlobaladdressComponent } from './edit-globaladdress.component';

describe('EditGlobaladdressComponent', () => {
  let component: EditGlobaladdressComponent;
  let fixture: ComponentFixture<EditGlobaladdressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditGlobaladdressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGlobaladdressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
