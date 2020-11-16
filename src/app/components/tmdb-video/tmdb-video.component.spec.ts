import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TmdbVideoComponent } from './tmdb-video.component';

describe('TmdbVideoComponent', () => {
  let component: TmdbVideoComponent;
  let fixture: ComponentFixture<TmdbVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TmdbVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TmdbVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
