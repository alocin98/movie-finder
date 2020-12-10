import {Component, HostBinding, OnInit} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot} from '@angular/router';
import {map, switchMap, tap} from 'rxjs/operators';
import {TMDBClient} from '@igorissen/ng-tmdb-api';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @HostBinding('class') class = 'search-container';

  movies$: Observable<any>;
  measure = this.getTime();

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.measure = new Date().getMilliseconds();
    });
    this.movies$ = this.route.params.pipe(
      switchMap(params => this.http.get('https://api.themoviedb.org/3/search/movie?api_key=a6b2c9accaaa7fb251ad47c6d6c59b5c&language=en-US&query=' + params.query + '&page=1&include_adult=false')),
      tap(() => this.measure = this.getTime() - this.measure),
      // @ts-ignore
      map(search => search.results),
    );
  }

  getTime(){
    return new Date().getMilliseconds();
  }

}
