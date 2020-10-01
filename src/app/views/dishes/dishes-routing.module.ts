import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddDishComponent } from './add-dish/add-dish.component';
import { DishesComponent } from './dishes.component';

const routes: Routes = [
  { path: '', component: DishesComponent },
  { path: 'dish-details/:id', component: AddDishComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DishesRoutingModule {}
