import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/ui/layout/layout.component';
import { SaleComponent } from './components/ui/layout/sale/sale/sale.component';
import { FavoriteComponent } from './components/ui/layout/favorite/favorite/favorite.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {path: 'sale', component: SaleComponent},
      {path: 'favorite',component: FavoriteComponent},
      {path: 'profile', 
    loadChildren: () => import('./components/ui/layout/profile/profile/profile.module')
    .then((m)=> m.ProfileModule)
    }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
