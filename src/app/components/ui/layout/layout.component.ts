import { ProductsService } from './../../../services/products.service';
import { Component, Inject, OnInit } from '@angular/core';
import { IProduct} from '../../products/product/product.interface';
import { Observable, tap } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit{
  loading: boolean = false;
  products$: Observable<IProduct[]>;
  currentUrl: string;

  constructor(
    private ProductsService: ProductsService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.products$ = this.ProductsService.getAll().pipe(tap(()=> this.loading = false))
    this.currentUrl = this.router.url;
    console.log(this.currentUrl);
  }

}