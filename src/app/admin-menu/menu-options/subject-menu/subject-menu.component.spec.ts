import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectMenuComponent } from './subject-menu.component';

describe('SubjectMenuComponent', () => {
  let component: SubjectMenuComponent;
  let fixture: ComponentFixture<SubjectMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
