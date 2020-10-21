import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'dishes', loadChildren: () => import('./modules/dish/dishes.module').then(m => m.DishesModule)},
  { path: 'forgot', loadChildren: () => import('./modules/user/forgot/forgot.module').then(m => m.ForgotModule)},
  { path: 'register', loadChildren: () => import('./modules/user/register/register.module').then(m => m.RegisterModule) },
  { path: 'login', loadChildren: () => import('./modules/user/login/login.module').then(m => m.LoginModule) },
  { path: 'welcome', loadChildren: () => import('./modules/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'groups', loadChildren: () => import('./modules/group/group.module').then(m => m.GroupModule)},
  {path: 'invite', loadChildren: () => import('./modules/invite/invite.module').then(m => m.InviteModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
