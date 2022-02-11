import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceLibraryComponent } from './resource-library.component';

describe('ResourceLibraryComponent', () => {
  let component: ResourceLibraryComponent;
  let fixture: ComponentFixture<ResourceLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourceLibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
