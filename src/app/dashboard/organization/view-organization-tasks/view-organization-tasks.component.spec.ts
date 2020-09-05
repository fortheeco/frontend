import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOrganizationTasksComponent } from './view-organization-tasks.component';

describe('ViewOrganizationTasksComponent', () => {
  let component: ViewOrganizationTasksComponent;
  let fixture: ComponentFixture<ViewOrganizationTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewOrganizationTasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOrganizationTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
