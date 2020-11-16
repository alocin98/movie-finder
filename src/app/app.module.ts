import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {RouterModule, Routes} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';
import { NgTMDBApiModule } from '@igorissen/ng-tmdb-api';
import {CommonModule} from '@angular/common';
import { TmdbImgComponent } from './components/tmdb-img/tmdb-img.component';
import {MatChipsModule} from '@angular/material/chips';
import {MatListModule} from '@angular/material/list';
import { TmdbVideoComponent } from './components/tmdb-video/tmdb-video.component';
import { SafeResurlPipe } from './safe-resurl.pipe';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieSmallComponent } from './components/movie-small/movie-small.component';
import { StartComponent } from './pages/start/start.component';
import { AboutComponent } from './pages/about/about.component';
import {SearchComponent} from './pages/search/search.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';

const appRoutes: Routes = [
  {path: '', component: StartComponent},
  {path: 'search', component: SearchComponent},
  {path: 'about', component: AboutComponent},
  {path: 'movie/:id', component: MovieDetailComponent}
];

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MovieDetailComponent,
    TmdbImgComponent,
    TmdbVideoComponent,
    SafeResurlPipe,
    MovieListComponent,
    MovieSmallComponent,
    StartComponent,
    AboutComponent,
    SearchInputComponent,
    SearchComponent,
    MovieListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    NgTMDBApiModule.forRoot({apiKey: 'a6b2c9accaaa7fb251ad47c6d6c59b5c'}),
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
    CommonModule,
    MatListModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
