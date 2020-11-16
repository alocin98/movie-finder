import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TmdbImgComponent } from './tmdb-img.component';

describe('TmdbImgComponent', () => {
  let component: TmdbImgComponent;
  let fixture: ComponentFixture<TmdbImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TmdbImgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TmdbImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
