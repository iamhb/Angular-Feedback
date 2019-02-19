import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginCheckComponent } from './login-check.component';

describe('LoginCheckComponent', () => {
  let component: LoginCheckComponent;
  let fixture: ComponentFixture<LoginCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
