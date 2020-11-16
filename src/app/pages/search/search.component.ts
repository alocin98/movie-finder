import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot} from '@angular/router';
import {map, switchMap, tap} from 'rxjs/operators';
import {TMDBClient} from '@igorissen/ng-tmdb-api';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  movies$: Observable<any>;

  constructor(private route: ActivatedRoute, private tmdb: TMDBClient) { }

  ngOnInit(): void {
    this.movies$ = this.route.params.pipe(
      switchMap(params => this.tmdb.discover.getMovies(params.query)),
      // @ts-ignore
      map(search => search.results),
      tap(console.log)
    );
  }

}
