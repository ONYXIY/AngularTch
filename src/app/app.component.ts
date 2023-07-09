import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  template: `<div>
    <h1>My First Angular App</h1>
    <nav>
    <router-outlet></router-outlet>
      <a routerLink="">MainPage</a>
      <a routerLink="samePage">NotMainPage</a>
    </nav>
  </div>`,
  // templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-app'
}
