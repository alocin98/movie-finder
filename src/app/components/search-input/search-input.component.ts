import { Component, OnInit } from '@angular/core';
import {ActivatedRouteSnapshot, Router} from '@angular/router';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {

  searchText: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  search(){
    this.router.navigate(['search/',  {query: this.searchText}]);
  }

}
