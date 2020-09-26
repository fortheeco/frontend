import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchOrganizationAutocompleteComponent } from './search-organization-autocomplete.component';

describe('SearchOrganizationAutocompleteComponent', () => {
  let component: SearchOrganizationAutocompleteComponent;
  let fixture: ComponentFixture<SearchOrganizationAutocompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchOrganizationAutocompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchOrganizationAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
