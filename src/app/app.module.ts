import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {RouterModule, Routes} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MovieDetailComponent } from './page/movie-detail/movie-detail.component';
import { NgTMDBApiModule } from '@igorissen/ng-tmdb-api';
import {CommonModule} from '@angular/common';
import { TmdbImgComponent } from './components/tmdb-img/tmdb-img.component';
import {MatChipsModule} from '@angular/material/chips';
import {MatListModule} from '@angular/material/list';
import { TmdbVideoComponent } from './components/tmdb-video/tmdb-video.component';
import { SafeResurlPipe } from './safe-resurl.pipe';

const appRoutes: Routes = [
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
    SafeResurlPipe
  ],
    imports: [
      BrowserModule,
      RouterModule.forRoot(appRoutes),
      NgTMDBApiModule.forRoot({ apiKey: 'a6b2c9accaaa7fb251ad47c6d6c59b5c' }),
      BrowserAnimationsModule,
      MatIconModule,
      MatButtonModule,
      MatChipsModule,
      CommonModule,
      MatListModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
