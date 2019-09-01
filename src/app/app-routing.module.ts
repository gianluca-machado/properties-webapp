import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'menu',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: './modules/login/login.module#LoginModule',
  },
  {
    path: 'new',
    loadChildren: './modules/new/new.module#NewModule',
  },
  {
    path: 'menu',
    loadChildren: './modules/menu/menu.module#MenuModule',
  },
  {
    path: '**',
    redirectTo: 'menu',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
