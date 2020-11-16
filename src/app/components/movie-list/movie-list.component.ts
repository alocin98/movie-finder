import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {TMDBClient} from '@igorissen/ng-tmdb-api';
import {map, tap} from 'rxjs/operators';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  @Input() config: any;
  movies$: Observable<any>;

  constructor(private tmdb: TMDBClient) { }

  ngOnInit(): void {
    if (this.config.type === 'trending'){
      this.movies$ = this.tmdb.trending.getTrending('movie', this.config.timeWindow).pipe(
        // @ts-ignore
        map(movies => movies.results)
      );
    }
    if (this.config.type === 'list'){}
    if (this.config.type === 'discover'){}
  }

}
