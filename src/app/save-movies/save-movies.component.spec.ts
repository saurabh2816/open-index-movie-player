import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveMoviesComponent } from './save-movies.component';

describe('SaveMoviesComponent', () => {
  let component: SaveMoviesComponent;
  let fixture: ComponentFixture<SaveMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveMoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
