import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroupsComponent } from './pages/groups/groups.component';
import { GroupsResolver } from './pages/groups/groups.resolver';

const routes: Routes = [
  { path: '', component: GroupsComponent, resolve: { groups: GroupsResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupRoutingModule {}
