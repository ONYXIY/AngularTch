import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { IMenuItem } from './header.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  darkModeON: boolean = false;
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

  constructor(@Inject(DOCUMENT) private document: Document) {}
// Весь нижний код написал gpt chat, я более 5 часов просидел и не могу понять,
// почему же darkModeON не меняет свое значение, когда статус html меняется,
// это единственный эелемент, который так себя вел
  ngOnInit(): void {
    this.checkDarkMode();

    const classObserver = new MutationObserver(() => {
      this.checkDarkMode();
    });

    classObserver.observe(this.document.documentElement, { attributes: true, attributeFilter: ['class'] });
  }

  checkDarkMode(): void {
    this.darkModeON = this.document.documentElement.classList.contains('dark');
  }
}
