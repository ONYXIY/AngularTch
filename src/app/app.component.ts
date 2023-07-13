import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  template: `<div>
    <app-global-error></app-global-error>
    
      <nav>
        <a routerLink=""></a>
        <a routerLink="sale"></a>
        <a routerLink="favorite"></a>
        <a routerLink="profile"></a>
      </nav>
      <app-layout>
        <router-outlet></router-outlet>
    </app-layout>
    </div>`,
  // templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  

}
