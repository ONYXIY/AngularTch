import { ProductsService } from './../../../services/products.service';
import { Component, Inject, OnInit } from '@angular/core';
import { IProduct} from '../../products/product/product.interface';



@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit{
  // darkModeON: boolean = false;
  products: IProduct[] = [];

  constructor(private ProductsService: ProductsService) {
    this.ProductsService.getAll().subscribe(products =>{
      this.products = products;
    })
  }


  ngOnInit(): void {
    
  }

}