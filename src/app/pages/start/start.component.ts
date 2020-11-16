import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  movieListConfig = [
    {title: 'This Week\'s Trends', type: 'trending', timeWindow: 'week'},
    {title: 'Best of 2019', type: 'discover', props: {
        year: '2019'
        }
    },
    {title: 'Johnny Depp', type: 'discover', props: {
        with_cast: '85'
      }
    },
    {title: 'All Time Favourites', type: 'list', id: '7065118'}
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
