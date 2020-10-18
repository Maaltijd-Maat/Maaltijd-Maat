import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroupDetails } from './pages/group-details/group-details.component';
import { GroupResolver } from './pages/group-details/group-resolver.service';
import { GroupsComponent } from './pages/groups/groups.component';
import { GroupsResolver } from './pages/groups/groups.resolver';
import { NewGroupComponent } from './pages/new-group/new-group.component';

const routes: Routes = [
  { path: '', component: GroupsComponent, resolve: { groups: GroupsResolver } },
  { path: ':id', component: GroupDetails, resolve: { group: GroupResolver } },
  { path: 'new', component: NewGroupComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupRoutingModule {}
