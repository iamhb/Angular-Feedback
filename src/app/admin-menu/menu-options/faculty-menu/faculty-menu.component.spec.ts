import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyMenuComponent } from './faculty-menu.component';

describe('FacultyMenuComponent', () => {
  let component: FacultyMenuComponent;
  let fixture: ComponentFixture<FacultyMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultyMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
