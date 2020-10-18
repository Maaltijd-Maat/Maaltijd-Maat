import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {IconsProviderModule} from '../../../icons-provider.module';
import {ReactiveFormsModule} from '@angular/forms';
import {EmailRequestComponent} from './email-request/email-request.component';
import {ChangePasswordComponent} from './change-password/change-password.component';
import {UserService} from '@services/user/user.service';
import {ForgotRoutingModule} from './forgot-routing.module';

@NgModule({
  declarations: [EmailRequestComponent, ChangePasswordComponent],
  exports: [EmailRequestComponent, ChangePasswordComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    IconsProviderModule,
    ReactiveFormsModule,
    ForgotRoutingModule
  ],
  providers: [UserService]
})
export class ForgotModule {}
