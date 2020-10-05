import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { DishesRoutingModule } from './dishes-routing.module';
import { DishService } from '@services/dish/dish.service';
import { DishesComponent } from './pages/dishes/dishes.component';
import { EditDishComponent } from './pages/edit-dish/edit-dish.component';
import { NewDishComponent } from './pages/new-dish/new-dish.component';

@NgModule({
  declarations: [DishesComponent, NewDishComponent, EditDishComponent],
  exports: [DishesComponent, NewDishComponent, EditDishComponent],
  imports: [
    DishesRoutingModule,
    CommonModule,
    NgZorroAntdModule,
    ReactiveFormsModule
  ],
  providers: [DishService]
})
export class DishesModule {}
