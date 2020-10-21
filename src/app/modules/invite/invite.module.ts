import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { IconsProviderModule } from '../../icons-provider.module';
import { InviteRoutingModule } from './invite-routing.module';
import { InviteComponent } from './Invite.component';

@NgModule({
  declarations: [InviteComponent],
  exports: [],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    IconsProviderModule,
    ReactiveFormsModule,
    InviteRoutingModule
  ],
  providers: []
})
export class InviteModule {}
