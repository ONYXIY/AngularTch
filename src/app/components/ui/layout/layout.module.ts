import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { FormsModule } from '@angular/forms';
import { HeaderModule } from './header/header.module';
import { ProductModule } from '../../products/product/product.module';
import { FavoriteModule } from './favorite/favorite/favorite.module';



@NgModule({
  declarations: [
    LayoutComponent
  ],
  exports:[LayoutComponent],
  imports: [
    CommonModule,
    FormsModule,
    HeaderModule,
    ProductModule,
    FavoriteModule
    
    

  ]
})
export class LayoutModule { }
