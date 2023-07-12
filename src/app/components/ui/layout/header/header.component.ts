import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { IMenuItem } from './header.interface';
import { IdarkMode } from 'src/app/components/products/product/darkMode.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  darkModeON: boolean = false;
  AppName: string = 'app name';
  TuggleMode: IdarkMode [] = [
    {
      icon: 'light_mode'
   }
  ]
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

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {
    this.checkDarkMode();

    const classObserver = new MutationObserver(() => {
      this.checkDarkMode();
    });

    classObserver.observe(this.document.documentElement, { attributes: true, attributeFilter: ['class'] });
  }
  toggleDarkMode(): void {
    const indexHtml = document.documentElement;
    this.darkModeON = !this.darkModeON;

    if (this.darkModeON) {
      indexHtml.classList.remove('light');
      indexHtml.classList.add('dark');
    } else {
      indexHtml.classList.remove('dark');
      indexHtml.classList.add('light');
    }
  }

  checkDarkMode(): void {
    this.darkModeON = this.document.documentElement.classList.contains('dark');
  }
}
