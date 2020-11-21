import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticateService as AuthGuard } from '@services/authenticate/authenticate.service';

const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/groups' },
  { path: 'dishes', loadChildren: () => import('./modules/dish/dishes.module').then(m => m.DishesModule), canActivate: [AuthGuard]},
  { path: 'forgot', loadChildren: () => import('./modules/user/forgot/forgot.module').then(m => m.ForgotModule)},
  { path: 'register', loadChildren: () => import('./modules/user/register/register.module').then(m => m.RegisterModule) },
  { path: 'login', loadChildren: () => import('./modules/user/login/login.module').then(m => m.LoginModule) },
  { path: 'welcome', loadChildren: () => import('./modules/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'groups', loadChildren: () => import('./modules/group/group.module').then(m => m.GroupModule), canActivate: [AuthGuard]},
  { path: 'profile', loadChildren: () => import('./modules/user/profile/profile.module').then(m => m.ProfileModule), canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
