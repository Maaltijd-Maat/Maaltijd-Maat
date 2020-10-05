import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditDishComponent } from './pages/edit-dish/edit-dish.component';
import { NewDishComponent } from './pages/new-dish/new-dish.component';
import { DishesComponent } from './pages/dishes/dishes.component';

const routes: Routes = [
  { path: '', component: DishesComponent },
  { path: 'new', component: NewDishComponent },
  { path: ':id', component: EditDishComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DishesRoutingModule {}
