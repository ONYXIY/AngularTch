import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';




@NgModule({
  declarations: [HeaderComponent],
  exports:[HeaderComponent],
   imports: [CommonModule,
    MatIconModule
  ]
})
export class HeaderModule { }
