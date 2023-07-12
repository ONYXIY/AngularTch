import { Component, OnInit } from '@angular/core';
import { IdarkMode } from './product.interface';
import { DOCUMENT } from '@angular/common';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  realText: boolean = false;
  isIndexHtmlDark: boolean = false;
   TuggleMode: IdarkMode [] = [
    {
      icon: 'light_mode'
   }
  ]



  ngOnInit(): void {
    // const indexHtml = document.documentElement;

    // if (indexHtml.classList.contains('dark')) {
    //   this.isIndexHtmlDark = !this.isIndexHtmlDark;
    // }
  }

  toggleDarkMode(): void {
    const indexHtml = document.documentElement;
    this.isIndexHtmlDark = !this.isIndexHtmlDark;

    if (this.isIndexHtmlDark) {
      indexHtml.classList.remove('light');
      indexHtml.classList.add('dark');
    } else {
      indexHtml.classList.remove('dark');
      indexHtml.classList.add('light');
    }
  }
}
