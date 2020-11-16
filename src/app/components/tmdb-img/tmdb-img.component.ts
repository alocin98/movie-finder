import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tmdb-img',
  templateUrl: './tmdb-img.component.html',
  styleUrls: ['./tmdb-img.component.css']
})
export class TmdbImgComponent implements OnInit {

  BASE_PATH = 'https://image.tmdb.org/t/p/w500';

  @Input() path: string;

  constructor() { }

  ngOnInit(): void {
  }

}
