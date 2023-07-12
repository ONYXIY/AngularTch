import { Component, Inject } from '@angular/core';
import { NgModule } from '@angular/core';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  // darkModeON: boolean = false;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {
    // const indexHtml = document.documentElement;

    // if (indexHtml.classList.contains('dark')) {
    //   this.darkModeON = !this.darkModeON;
    // }
  }

}