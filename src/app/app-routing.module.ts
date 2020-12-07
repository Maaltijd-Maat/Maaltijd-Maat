import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardLayoutComponent } from './_layout/dashboard-layout.component';

const routes: Routes = [

  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: '/welcome' },
      { path: 'dishes', loadChildren: () => import('./modules/dish/dishes.module').then(m => m.DishesModule) },
      { path: 'welcome', loadChildren: () => import('./modules/welcome/welcome.module').then(m => m.WelcomeModule) },
      { path: 'groups', loadChildren: () => import('./modules/group/group.module').then(m => m.GroupModule) },
      { path: 'profile', loadChildren: () => import('./modules/user/profile/profile.module').then(m => m.ProfileModule) }
    ]
  },

  { path: 'forgot', loadChildren: () => import('./modules/user/forgot/forgot.module').then(m => m.ForgotModule) },
  { path: 'register', loadChildren: () => import('./modules/user/register/register.module').then(m => m.RegisterModule) },
  { path: 'login', loadChildren: () => import('./modules/user/login/login.module').then(m => m.LoginModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
