import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NzMenuModule } from 'ng-zorro-antd/menu';

import { GroupRoutingModule } from './group-routing.module';
import { InviteUserComponent } from './pages/invite-user/invite-user.component';
import { InviteComponent } from './pages/invite/Invite.component';
import { InvitesComponent } from './pages/invites/Invites.component';
import { SharedGroupService } from './shared-group.service';
import { GroupsComponent } from './pages/groups/groups.component';
import { NewGroupComponent } from './pages/new-group/new-group.component';
import { GroupDetailsComponent } from './pages/group-details/group-details.component';

import { NzMessageService } from 'ng-zorro-antd/message';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { IconsProviderModule } from '../../icons-provider.module';

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
    NzDatePickerModule,
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
    NzModalModule,
    NzMenuModule
  ],
  providers: [SharedGroupService, NzMessageService]
})
export class GroupModule {}
