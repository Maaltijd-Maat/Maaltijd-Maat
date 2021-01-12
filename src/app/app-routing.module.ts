import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticateService as AuthGuard } from '@services/authenticate/authenticate.service';
import { LoginTemplate } from './templates/login/login.template';
import { MenuTemplate } from './templates/menu/menu.template';

const ROUTES: Routes = [
  {
    path: '', component: MenuTemplate, children: [
      { path: '', pathMatch: 'full', redirectTo: '/meals' },
      {
        path: 'dishes',
        loadChildren: () => import('./modules/dish/dishes.module').then(m => m.DishesModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'meals',
        loadChildren: () => import('./modules/meal/meals.module').then(m => m.MealsModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'groups',
        loadChildren: () => import('./modules/group/group.module').then(m => m.GroupModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'profile',
        loadChildren: () => import('./modules/user/profile/profile.module').then(m => m.ProfileModule),
        canActivate: [AuthGuard]
      }
    ]
  },
  {
    path: '', component: LoginTemplate, children: [
      {
        path: 'login',
        loadChildren: () => import('./modules/user/login/login.module').then(m => m.LoginModule)
      },
      {
        path: 'register',
        loadChildren: () => import('./modules/user/register/register.module').then(m => m.RegisterModule)
      },
      {
        path: 'forgot',
        loadChildren: () => import('./modules/user/forgot/forgot.module').then(m => m.ForgotModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
