import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {InformationComponent} from './information/information.component';
import {AllergiesComponent} from './allergies/allergies.component';
import {DietsComponent} from './diets/diets.component';
import {MenuComponent} from './menu/menu.component';
import {UserResolver} from './UserResolver';

const routes: Routes = [
  { path: '', component: MenuComponent, resolve: { user: UserResolver },
    children: [
      { path: 'information', component: InformationComponent, resolve: { user: UserResolver }},
      { path: 'allergies', component: AllergiesComponent, resolve: { user: UserResolver } },
      { path: 'diets', component: DietsComponent, resolve: { user: UserResolver } }
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule {}
