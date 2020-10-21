import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GroupsComponent } from './pages/groups/groups.component';
import { GroupsResolver } from './pages/groups/groups.resolver';
import { GroupDetails } from './pages/group-details/group-details.component';
import { GroupResolver } from './pages/group-details/group-resolver.service';

const routes: Routes = [
  { path: '', component: GroupsComponent, resolve: { groups: GroupsResolver },
    children: [
      { path: 'group/:id', component: GroupDetails, resolve: { group: GroupResolver }}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupRoutingModule {}
