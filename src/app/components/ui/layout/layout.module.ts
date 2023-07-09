import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LayoutComponent
  ],
  exports:[LayoutComponent],
  imports: [
    CommonModule,
    FormsModule

  ]
})
export class LayoutModule { }
