import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { MatIconModule } from '@angular/material/icon';
import { HeaderModule } from '../../ui/layout/header/header.module';



@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    CommonModule, MatIconModule, HeaderModule
  ],
  exports: [ProductComponent]
})
export class ProductModule { }
