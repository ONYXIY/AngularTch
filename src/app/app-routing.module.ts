import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/ui/layout/layout.component';

const routes: Routes = [
  {
    path: '', // Пустой путь - главная страница
    component: AppComponent  // Компонент, который будет отображен для главной страницы
  },
  {
    path: 'samePage', // почти главная с:
    component: LayoutComponent  // другая компонента
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
