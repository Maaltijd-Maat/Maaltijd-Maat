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
import {MealComponent} from './pages/meal/meal.component';

import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

@NgModule({
  declarations: [
    MealsComponent,
    NewMealComponent,
    MealComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    IconsProviderModule,
    ReactiveFormsModule,
    MealsRoutingModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory })
  ],
  providers: [
    MealService,
    MealSharedService
  ]
})
export class MealsModule {}
