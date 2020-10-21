import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InviteResolver } from './invite-resolver.service';
import { InviteComponent } from './Invite.component';

const routes: Routes = [
  { path: ':id', component: InviteComponent, resolve: { invite: InviteResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InviteRoutingModule {}
