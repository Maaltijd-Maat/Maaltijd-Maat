import { Component } from '@angular/core';
import {Router} from '@angular/router';
import decode from 'jwt-decode';
import {AuthenticateService} from '@services/authenticate/authenticate.service';

@Component({
  selector: 'login-template',
  templateUrl: './login.template.html',
  styleUrls: ['./login.template.scss']
})
export class LoginTemplate {}
