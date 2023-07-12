import { ProductsService } from './../../../services/products.service';
import { Component, Inject, OnInit } from '@angular/core';
import { IProduct} from '../../products/product/product.interface';
import { Observable, tap } from 'rxjs';



@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit{
  // products: IProduct[] = [];
  loading: boolean = false;
  products$: Observable<IProduct[]>

  constructor(private ProductsService: ProductsService) {
    
  }


  ngOnInit(): void {
    this.loading = true;
    this.products$ = this.ProductsService.getAll().pipe(tap(()=> this.loading = false))
    // this.ProductsService.getAll().subscribe(products =>{
    //   this.products = products;
    //   this.loading = false;
    // })
  }

}