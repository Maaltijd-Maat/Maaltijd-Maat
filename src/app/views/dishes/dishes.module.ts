import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AddDishComponent } from './add-dish/add-dish.component';
import { DishesRoutingModule } from './dishes-routing.module';
import { DishesComponent } from './dishes.component';
import { DishService } from '../../services/dish.service';

@NgModule({
  declarations: [DishesComponent, AddDishComponent],
  exports: [DishesComponent, AddDishComponent],
  imports: [
    DishesRoutingModule,
    CommonModule,
    NgZorroAntdModule,
    ReactiveFormsModule
  ],
  providers: [DishService]
})
export class DishesModule {}
