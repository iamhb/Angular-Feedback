import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionModuleComponent } from './question-module.component';

describe('QuestionModuleComponent', () => {
  let component: QuestionModuleComponent;
  let fixture: ComponentFixture<QuestionModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
