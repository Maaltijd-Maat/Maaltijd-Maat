import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MealsComponent } from './pages/groups/meals.component';
import { MealsResolver } from './pages/groups/meals.resolver';

const routes: Routes = [
  { path: '', component: MealsComponent, resolve: { groups: MealsResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MealsRoutingModule {}
