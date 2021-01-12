import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { IconsProviderModule } from '../../../icons-provider.module';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

@NgModule({
  declarations: [LoginComponent],
  exports: [LoginComponent],
  imports: [
    CommonModule,
    IconsProviderModule,
    ReactiveFormsModule,
    LoginRoutingModule,
    NzFormModule,
    NzTypographyModule,
    NzAlertModule,
    NzInputModule,
    NzCheckboxModule,
    NzButtonModule
  ],
  providers: []
})
export class LoginModule {}
