import { Component, OnInit, Input, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common'
import { IProduct } from './product.interface';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  realText: boolean = false;
  isIndexHtmlDark: boolean = false;
  moreDetails: boolean = false;

  @Input() product: IProduct

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
    this.isIndexHtmlDark = !this.isIndexHtmlDark;

  }
  checkDarkMode(): void {
    this.isIndexHtmlDark = this.document.documentElement.classList.contains('dark');
  }
}
