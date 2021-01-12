import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { UserService } from '@services/user/user.service';
import { IconsProviderModule } from '../../../icons-provider.module';
import { InformationComponent } from './information/information.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { AllergiesComponent } from './allergies/allergies.component';
import { DietsComponent } from './diets/diets.component';
import { MenuComponent } from './menu/menu.component';

import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

@NgModule({
  declarations: [InformationComponent, AllergiesComponent, DietsComponent, MenuComponent],
  exports: [InformationComponent, AllergiesComponent, DietsComponent, MenuComponent],
  imports: [
    CommonModule,
    IconsProviderModule,
    ReactiveFormsModule,
    ProfileRoutingModule,
    NzGridModule,
    NzTypographyModule,
    NzFormModule,
    NzAlertModule,
    NzInputModule,
    NzButtonModule,
    NzMenuModule,
    NzCardModule
  ],
  providers: [UserService]
})
export class ProfileModule {}
