import { Component } from '@angular/core';
import {Router} from '@angular/router';
import decode from 'jwt-decode';
import {AuthenticateService} from '@services/authenticate/authenticate.service';

@Component({
  selector: 'app-menu-component',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  isCollapsed = false;
  username: string;

  constructor(private router: Router, private authenticateService: AuthenticateService) {
    const payload: any = decode(authenticateService.getToken());
    this.username = payload.name;
  }

  profile() {
    this.router.navigate(['/profile']);
  }

  help() {
    //TODO go to help page with instructions how to use the app.
    //this.router.navigate(['/help']);
  }

  logout() {
    window.localStorage.clear();
    this.router.navigate(['login']);
  }
}
