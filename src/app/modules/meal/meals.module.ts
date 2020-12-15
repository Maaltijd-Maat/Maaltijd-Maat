import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MealService } from '@services/meal/meal.service';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { IconsProviderModule } from '../../icons-provider.module';
import { MealSharedService } from './meal.shared.service';
import { MealsRoutingModule } from './meals-routing.module';
import { MealsComponent } from './pages/meals/meals.component';
import { NewMealComponent } from './pages/new-meal/new-meal.component';

@NgModule({
  declarations: [
    MealsComponent,
    NewMealComponent
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
    MealService,
    MealSharedService
  ]
})
export class MealsModule {}
