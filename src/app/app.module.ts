import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthenticateInterceptor } from '@services/authenticate/authenticate.interceptor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import nl from '@angular/common/locales/nl';
import { MenuComponent } from './views/menu/menu.component';

registerLocaleData(nl);

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US },
    { provide: HTTP_INTERCEPTORS, useClass: AuthenticateInterceptor, multi: true }
    ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
