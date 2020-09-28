import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { nl_NL } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import nl from '@angular/common/locales/nl';
import { AddDishComponent } from './views/add-dish/add-dish.component';
import {RegisterComponent } from './views/register/register.component';
import {MenuComponent} from "./views/menu/menu.component";
import {
  NzFormModule,
  NzInputModule,
  NzButtonModule,
  NzInputNumberModule,
  NzTabsModule,
  NzCheckboxModule
} from "ng-zorro-antd";
import {LoginComponent} from "./views/login/login.component";

registerLocaleData(nl);

@NgModule({
  declarations: [
    AppComponent,
    AddDishComponent,
    RegisterComponent,
    MenuComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzFormModule,
    NzInputModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzInputNumberModule,
    NzTabsModule,
    NzCheckboxModule
  ],
  providers: [{ provide: NZ_I18N, useValue: nl_NL }],
  bootstrap: [AppComponent]
})
export class AppModule { }
