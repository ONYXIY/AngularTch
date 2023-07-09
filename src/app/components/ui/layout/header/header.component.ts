import { ImenuItem } from './header.interface';
import { Component, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  template: `
    <i class="fas fa-heart"></i>
  `,
  styleUrls: ['./header.component.scss'],
  
})
export class HeaderComponent implements OnInit{

menuItems: ImenuItem[] = []
  constructor(){

  }
  ngOnInit(): void {
    
  }

}
