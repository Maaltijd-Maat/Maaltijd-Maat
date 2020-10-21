import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InviteResolver } from './pages/invite/invite-resolver.service';
import { InviteComponent } from './pages/invite/Invite.component';
import { InvitesResolver } from './pages/invites/invites-resolver.service';
import { InvitesComponent } from './pages/invites/Invites.component';

const routes: Routes = [
  { path: '', component: InvitesComponent, resolve: { invites: InvitesResolver } },
  { path: ':id', component: InviteComponent, resolve: { invite: InviteResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InviteRoutingModule {}
