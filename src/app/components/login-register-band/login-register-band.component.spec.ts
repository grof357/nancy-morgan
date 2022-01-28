import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRegisterBandComponent } from './login-register-band.component';

describe('LoginRegisterBandComponent', () => {
  let component: LoginRegisterBandComponent;
  let fixture: ComponentFixture<LoginRegisterBandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginRegisterBandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginRegisterBandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
