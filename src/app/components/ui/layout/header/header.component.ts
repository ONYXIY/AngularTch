import { Component} from '@angular/core'

import { IMenuItem } from './header.interface'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  darkModeON: boolean = false
  AppName: string = 'app name'
  ItemMenu: IMenuItem[] = [
    {
      path: '/',
      icon: 'home'
    },
    {
      path: '/sale',
      icon: 'percent'
    },
    {
      path: '/favorite',
      icon: 'favorite'
    },
    {
      path: '/profile',
      icon: 'person'
    }
  ]

}
