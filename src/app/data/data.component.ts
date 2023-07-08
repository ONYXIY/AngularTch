import { Component } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent {
message: string = '';
constructor(){
setInterval(() =>{
  this.message = new Date().toLocaleTimeString();
}, 1000)
}
}
