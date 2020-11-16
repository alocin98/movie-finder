import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  public links = [
    {route: '/', label: 'Movie-Finder', icon: 'theaters'},
    {route: '/search', label: 'search', icon: 'search'},
    {route: '/about', label: 'About', icon: 'help'}
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
