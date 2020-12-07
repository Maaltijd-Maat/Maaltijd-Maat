import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { IconsProviderModule } from '../../icons-provider.module';
import { MealsRoutingModule } from './meals-routing.module';

@NgModule({
  declarations: [],
  exports: [],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    IconsProviderModule,
    ReactiveFormsModule,
    MealsRoutingModule
  ],
  providers: []
})
export class MealsModule {}
