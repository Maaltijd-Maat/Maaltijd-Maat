import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewDishComponent } from './pages/new-dish/new-dish.component';
import { DishesComponent } from './pages/dishes/dishes.component';

const routes: Routes = [
  { path: '', component: DishesComponent },
  { path: 'new', component: NewDishComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DishesRoutingModule {}
