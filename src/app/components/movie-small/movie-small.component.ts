import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-movie-small',
  templateUrl: './movie-small.component.html',
  styleUrls: ['./movie-small.component.scss']
})
export class MovieSmallComponent implements OnInit {

  @Input() movie: any;

  constructor() { }

  ngOnInit(): void {
  }

}
