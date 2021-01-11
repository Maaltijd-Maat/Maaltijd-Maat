import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  NzBreadCrumbModule,
  NzButtonModule,
  NzCardModule,
  NzDividerModule, NzFormModule, NzInputModule, NzInputNumberModule,
  NzPageHeaderModule, NzPopconfirmModule,
  NzTableModule
} from 'ng-zorro-antd';

import { IconsProviderModule } from '../../icons-provider.module';

import { DishesRoutingModule } from './dishes-routing.module';
import { DishService } from '@services/dish/dish.service';
import { DishesComponent } from './pages/dishes/dishes.component';
import { EditDishComponent } from './pages/edit-dish/edit-dish.component';
import { NewDishComponent } from './pages/new-dish/new-dish.component';
import { NzMessageService } from 'ng-zorro-antd/message';

@NgModule({
  declarations: [DishesComponent, NewDishComponent, EditDishComponent],
  exports: [DishesComponent, NewDishComponent, EditDishComponent],
  imports: [
    CommonModule,
    IconsProviderModule,
    ReactiveFormsModule,
    DishesRoutingModule,
    NzPageHeaderModule,
    NzBreadCrumbModule,
    NzCardModule,
    NzDividerModule,
    NzButtonModule,
    NzTableModule,
    NzFormModule,
    NzInputModule,
    NzInputNumberModule,
    NzPopconfirmModule
  ],
  providers: [DishService, NzMessageService]
})
export class DishesModule {}
