import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieSmallComponent } from './movie-small.component';

describe('MovieSmallComponent', () => {
  let component: MovieSmallComponent;
  let fixture: ComponentFixture<MovieSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieSmallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
