import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { MatIconModule } from '@angular/material/icon';
import { HeaderModule } from '../../ui/layout/header/header.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    CommonModule, MatIconModule, HeaderModule, FormsModule
  ],
  exports: [ProductComponent]
})
export class ProductModule { }
