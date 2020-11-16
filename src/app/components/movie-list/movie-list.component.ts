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
    if (this.config.type === 'list') {
      this.movies$ = this.tmdb.lists.getDetails(this.config.id).pipe(
        tap(console.log),
        // @ts-ignore
        map(movies => movies.items)
      );
    }

    if (this.config.type === 'discover') {
      this.movies$ = this.tmdb.discover.getMovies(this.config.props).pipe(
        // @ts-ignore
        map(movies => movies.results)
      );
    }
  }

}
