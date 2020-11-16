import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-tmdb-video',
  templateUrl: './tmdb-video.component.html',
  styleUrls: ['./tmdb-video.component.css']
})
export class TmdbVideoComponent implements OnInit {

  @Input() video: any;
  src: string;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.src = 'https://www.youtube.com/embed/' + this.video.key;
  }

}
