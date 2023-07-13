import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/ui/layout/layout.component';
import { SaleComponent } from './components/ui/layout/sale/sale/sale.component';
import { FavoriteComponent } from './components/ui/layout/favorite/favorite/favorite.component';
import { ProfileComponent } from './components/ui/layout/profile/profile/profile.component';

const routes: Routes = [
  {
    path: '', // Пустой путь - главная страница
    component: AppComponent  // Компонент, который будет отображен для главной страницы
  },
  {
    path: 'samePage', // почти главная с:
    component: LayoutComponent  // другая компонента
  },
  {
    path: 'sale', // страница скидок
    component: SaleComponent
  },
  {
  path: 'favorite',
  component: FavoriteComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
