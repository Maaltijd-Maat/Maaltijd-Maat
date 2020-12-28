import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MealsComponent } from './pages/meals/meals.component';
import { MealsResolver } from './pages/meals/meals.resolver';
import { MealComponent } from './pages/meal/meal.component';
import {MealResolver} from './pages/meal.resolver';

const routes: Routes = [
  { path: '', component: MealsComponent, resolve: { meals: MealsResolver } },
  { path: ':id', component: MealComponent, resolve: { meal: MealResolver }}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MealsRoutingModule {}
