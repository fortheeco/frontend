import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSomeSkillsComponent } from './show-some-skills.component';

describe('ShowSomeSkillsComponent', () => {
  let component: ShowSomeSkillsComponent;
  let fixture: ComponentFixture<ShowSomeSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowSomeSkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSomeSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
