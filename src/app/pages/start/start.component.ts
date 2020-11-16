import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  movieListConfig = [{title: 'This Week\'s Trends', type: 'trending', timeWindow: 'week'}];

  constructor() { }

  ngOnInit(): void {
  }

}
