import { IMenuItem } from './header.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  menuItems: IMenuItem[] = [
    {
      path: '/',
      icon: 'Home'
    },{
      path: '/sale',
      icon: 'percentage'
    },{
      path: '/favorites',
      icon: 'favorite'
    },{
      path: '/profile',
      icon: 'person'
    },
  ]

  constructor(){

  }
  ngOnInit(): void {
    
  }
}
