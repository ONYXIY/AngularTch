import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    CommonModule, MatIconModule,
  ],
  exports: [ProductComponent]
})
export class ProductModule { }
