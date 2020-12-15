import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MealsComponent } from './pages/meals/meals.component';
import { MealsResolver } from './pages/meals/meals.resolver';

const routes: Routes = [
  { path: '', component: MealsComponent, resolve: { groups: MealsResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MealsRoutingModule {}
