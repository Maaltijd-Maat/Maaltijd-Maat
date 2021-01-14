import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MealService } from '@services/meal/meal.service';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

import { IconsProviderModule } from '../../icons-provider.module';
import { MealSharedService } from './meal.shared.service';
import { MealsRoutingModule } from './meals-routing.module';
import { MealsComponent } from './pages/meals/meals.component';
import { NewMealComponent } from './pages/new-meal/new-meal.component';
import { MealComponent } from './pages/meal/meal.component';
import { NewSuggestionComponent } from './pages/new-suggestion/new-suggestion.component';

import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { NzMessageService } from 'ng-zorro-antd/message';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

@NgModule({
  declarations: [
    MealsComponent,
    NewMealComponent,
    MealComponent,
    NewSuggestionComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    IconsProviderModule,
    ReactiveFormsModule,
    MealsRoutingModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    FormsModule,
    NzPageHeaderModule,
    NzBreadCrumbModule,
    NzGridModule,
    NzTypographyModule,
    NzButtonModule,
    NzAvatarModule,
    NzSelectModule,
    NzCardModule,
    NzTableModule,
    NzRadioModule,
    NzModalModule,
    NzFormModule,
    NzInputModule,
    NzDatePickerModule
  ],
  providers: [
    MealService,
    MealSharedService,
    NzMessageService
  ]
})
export class MealsModule {}
