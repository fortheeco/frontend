import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFreeAddressesComponent } from './add-free-addresses.component';

describe('AddFreeAddressesComponent', () => {
  let component: AddFreeAddressesComponent;
  let fixture: ComponentFixture<AddFreeAddressesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFreeAddressesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFreeAddressesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
