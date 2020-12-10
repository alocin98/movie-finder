import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {first, map, switchMap, tap} from 'rxjs/operators';
import {from, Observable, of} from 'rxjs';
import {TMDBClient} from '@igorissen/ng-tmdb-api';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  movie$: any;

  constructor(private route: ActivatedRoute, private tmdb: TMDBClient) { }

  ngOnInit(): void {
    this.movie$ = this.route.params.pipe(
      map(params => params.id),
      switchMap(id => this.tmdb.movies.getDetails(id, {language: 'EN', append_to_response: 'videos,images,similar'})),
    );
  }

  getSimilar(movie: any): Observable<any>{
    console.log(movie.similar.results);
    return of(movie.similar.results);
  }

}
