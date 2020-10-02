import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddDishComponent} from "./views/add-dish/add-dish.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'add-dish', component: AddDishComponent },
  { path: 'register', loadChildren: () => import('./views/register/register.module').then(m => m.RegisterModule) },
  { path: 'login', loadChildren: () => import('./views/login/login.module').then(m => m.LoginModule) },
  { path: 'welcome', loadChildren: () => import('./views/welcome/welcome.module').then(m => m.WelcomeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
