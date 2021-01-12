import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

import { IconsProviderModule } from '../../icons-provider.module';

import { DishesRoutingModule } from './dishes-routing.module';
import { DishService } from '@services/dish/dish.service';
import { DishesComponent } from './pages/dishes/dishes.component';
import { EditDishComponent } from './pages/edit-dish/edit-dish.component';
import { NewDishComponent } from './pages/new-dish/new-dish.component';

import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzTableModule } from 'ng-zorro-antd/table';
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
    NzPopconfirmModule,
    NzTypographyModule
  ],
  providers: [DishService, NzMessageService]
})
export class DishesModule {}
