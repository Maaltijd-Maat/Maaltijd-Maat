import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IconsProviderModule } from '../../../icons-provider.module';

import { EmailRequestComponent } from './email-request/email-request.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { UserService } from '@services/user/user.service';
import { ForgotRoutingModule } from './forgot-routing.module';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzAlertModule } from 'ng-zorro-antd/alert';

@NgModule({
  declarations: [EmailRequestComponent, ChangePasswordComponent],
  exports: [EmailRequestComponent, ChangePasswordComponent],
  imports: [
    CommonModule,
    IconsProviderModule,
    ReactiveFormsModule,
    ForgotRoutingModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzTypographyModule,
    NzAlertModule
  ],
  providers: [UserService]
})
export class ForgotModule {}
