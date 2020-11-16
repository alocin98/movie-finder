import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieIstComponent } from './movie-ist.component';

describe('MovieIstComponent', () => {
  let component: MovieIstComponent;
  let fixture: ComponentFixture<MovieIstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieIstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieIstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
