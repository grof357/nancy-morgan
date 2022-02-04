import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackSlideComponent } from './black-slide.component';

describe('BlackSlideComponent', () => {
  let component: BlackSlideComponent;
  let fixture: ComponentFixture<BlackSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlackSlideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlackSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
