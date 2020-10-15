import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { IconsProviderModule } from '../../icons-provider.module';
import { GroupRoutingModule } from './group-routing.module';
import { GroupsComponent } from './pages/groups/groups.component';
import { GroupUsersComponent } from './pages/group-users/group-users.component';

@NgModule({
  declarations: [GroupsComponent, GroupUsersComponent],
  exports: [],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    IconsProviderModule,
    ReactiveFormsModule,
    GroupRoutingModule
  ],
  providers: []
})
export class GroupModule {}
