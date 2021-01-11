import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  NzAvatarModule, NzBadgeModule, NzBreadCrumbModule,
  NzButtonModule, NzCardModule, NzEmptyModule,
  NzFormModule,
  NzInputModule, NzModalModule, NzPageHeaderModule,
  NzPopconfirmModule, NzResultModule,
  NzTableModule,
  NzTypographyModule
} from 'ng-zorro-antd';
import { IconsProviderModule } from '../../icons-provider.module';

import { GroupRoutingModule } from './group-routing.module';
import { InviteUserComponent } from './pages/invite-user/invite-user.component';
import { InviteComponent } from './pages/invite/Invite.component';
import { InvitesComponent } from './pages/invites/Invites.component';
import { SharedGroupService } from './shared-group.service';
import { GroupsComponent } from './pages/groups/groups.component';
import { NewGroupComponent } from './pages/new-group/new-group.component';
import { GroupDetailsComponent } from './pages/group-details/group-details.component';

@NgModule({
  declarations: [GroupsComponent,
    GroupDetailsComponent,
    NewGroupComponent,
    InviteUserComponent,
    InvitesComponent,
    InviteComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    IconsProviderModule,
    ReactiveFormsModule,
    GroupRoutingModule,
    NzTypographyModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzPopconfirmModule,
    NzTableModule,
    NzAvatarModule,
    NzPageHeaderModule,
    NzBreadCrumbModule,
    NzCardModule,
    NzBadgeModule,
    NzEmptyModule,
    NzResultModule,
    NzModalModule
  ],
  providers: [SharedGroupService]
})
export class GroupModule {}
