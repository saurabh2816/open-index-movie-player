import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomVideoComponent } from './custom-video.component';

describe('CustomVideoComponent', () => {
  let component: CustomVideoComponent;
  let fixture: ComponentFixture<CustomVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
