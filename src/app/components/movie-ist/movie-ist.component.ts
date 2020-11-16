import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-movie-ist',
  templateUrl: './movie-ist.component.html',
  styleUrls: ['./movie-ist.component.css']
})
export class MovieIstComponent implements OnInit {

  @Input() movies: any[];

  constructor() { }

  ngOnInit(): void {
  }

}
