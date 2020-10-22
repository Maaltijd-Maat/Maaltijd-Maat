import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GroupsComponent } from './pages/groups/groups.component';
import { GroupsResolver } from './pages/groups/groups.resolver';
import { GroupDetailsComponent } from './pages/group-details/group-details.component';
import { GroupResolver } from './pages/group-details/group-resolver.service';
import { InviteResolver } from './pages/invite/invite-resolver.service';
import { InviteComponent } from './pages/invite/Invite.component';
import { InvitesResolver } from './pages/invites/invites-resolver.service';
import { InvitesComponent } from './pages/invites/Invites.component';


const routes: Routes = [
  {
    path: '', component: GroupsComponent, resolve: { groups: GroupsResolver },
    children: [
      { path: 'group/:id', component: GroupDetailsComponent, resolve: { group: GroupResolver } }
    ]
  },
  { path: 'invites', component: InvitesComponent, resolve: { invites: InvitesResolver } },
  { path: 'invites/:id', component: InviteComponent, resolve: { invite: InviteResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupRoutingModule {}
