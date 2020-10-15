import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroupsComponent } from './pages/groups/groups.component';

const routes: Routes = [
  { path: '', component: GroupsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupRoutingModule {}
