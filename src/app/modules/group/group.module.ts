import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { IconsProviderModule } from '../../icons-provider.module';

import { GroupRoutingModule } from './group-routing.module';
import { InviteUserComponent } from './pages/invite-user/invite-user.component';
import { SharedGroupService } from './shared-group.service';
import { GroupsComponent } from './pages/groups/groups.component';
import { NewGroupComponent } from './pages/new-group/new-group.component';
import { GroupDetails } from './pages/group-details/group-details.component';

@NgModule({
  declarations: [GroupsComponent, GroupDetails, NewGroupComponent, InviteUserComponent],
  exports: [],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    IconsProviderModule,
    ReactiveFormsModule,
    GroupRoutingModule
  ],
  providers: [SharedGroupService]
})
export class GroupModule {}
