import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { IconsProviderModule } from '../../../icons-provider.module';
import {InformationComponent} from './information/information.component';
import {ProfileRoutingModule} from './profile-routing.module';
import {UserService} from '@services/user/user.service';
import {AllergiesComponent} from './allergies/allergies.component';
import {DietsComponent} from './diets/diets.component';
import {MenuComponent} from './menu/menu.component';

@NgModule({
  declarations: [InformationComponent, AllergiesComponent, DietsComponent, MenuComponent],
  exports: [InformationComponent, AllergiesComponent, DietsComponent, MenuComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    IconsProviderModule,
    ReactiveFormsModule,
    ProfileRoutingModule
  ],
  providers: [UserService]
})
export class ProfileModule {}
