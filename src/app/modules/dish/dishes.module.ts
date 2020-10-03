import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { DishesRoutingModule } from './dishes-routing.module';
import { DishesComponent } from './pages/dishes/dishes.component';
import { NewDishComponent } from './pages/new-dish/new-dish.component';

import { DishService } from '../../services/dish.service';

@NgModule({
  declarations: [DishesComponent, NewDishComponent],
  exports: [DishesComponent, NewDishComponent],
  imports: [
    DishesRoutingModule,
    CommonModule,
    NgZorroAntdModule,
    ReactiveFormsModule
  ],
  providers: [DishService]
})
export class DishesModule {}
