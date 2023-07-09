import { Component } from '@angular/core';
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  visibility: boolean = true;
  isCollapsed: boolean = false;
  toggleCollapse(){
  this.isCollapsed = !this.isCollapsed;
}
toggle(){
  this.visibility = !this.visibility;
}
text: string = '';
}