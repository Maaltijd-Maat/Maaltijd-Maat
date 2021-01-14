import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { IconsProviderModule } from '../../../icons-provider.module';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';

import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

@NgModule({
  declarations: [RegisterComponent],
  exports: [RegisterComponent],
  imports: [
    CommonModule,
    IconsProviderModule,
    ReactiveFormsModule,
    RegisterRoutingModule,
    NzFormModule,
    NzTypographyModule,
    NzAlertModule,
    NzInputModule,
    NzButtonModule
  ],
  providers: []
})
export class RegisterModule {}
