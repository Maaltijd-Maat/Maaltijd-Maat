import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {EmailRequestComponent} from './email-request/email-request.component';
import {ChangePasswordComponent} from './change-password/change-password.component';
import {TokenResolver} from './change-password/token.resolver';

const routes: Routes = [
  { path: '', component: EmailRequestComponent },
  { path: ':token', component: ChangePasswordComponent, resolve: { token: TokenResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForgotRoutingModule {}
