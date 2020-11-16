import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  public links = [
    {route: '/', label: 'Movie-Finder'},
    {route: '/search', label: 'Search'},
    {route: '/about', label: 'About'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  openNav(): void{
    document.getElementById('myNav').style.width = '100%';
  }

  closeNav(): void {
    document.getElementById('myNav').style.width = '0%';
  }
}
