import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MealService } from '@services/meal/meal.service';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { IconsProviderModule } from '../../icons-provider.module';
import { MealsRoutingModule } from './meals-routing.module';
import { MealsComponent } from './pages/groups/meals.component';

@NgModule({
  declarations: [
    MealsComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    IconsProviderModule,
    ReactiveFormsModule,
    MealsRoutingModule
  ],
  providers: [
    MealService
  ]
})
export class MealsModule {}
