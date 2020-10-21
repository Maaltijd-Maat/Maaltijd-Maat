import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { IconsProviderModule } from '../../icons-provider.module';
import { InviteRoutingModule } from './invite-routing.module';
import { InviteComponent } from './pages/invite/Invite.component';
import { InvitesComponent } from './pages/invites/Invites.component';

@NgModule({
  declarations: [InviteComponent, InvitesComponent],
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
