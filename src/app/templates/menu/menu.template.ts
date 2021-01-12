import { Component } from '@angular/core';
import { Router } from '@angular/router';
import decode from 'jwt-decode';
import { AuthenticateService } from '@services/authenticate/authenticate.service';

@Component({
  selector: 'app-menu-template',
  templateUrl: './menu.template.html',
  styleUrls: ['./menu.template.scss']
})
export class MenuTemplate {
  isCollapsed = false;
  username: string;

  constructor(private router: Router, private authenticateService: AuthenticateService) {
    const payload: any = decode(authenticateService.getToken());
    this.username = payload.name;
  }

  profile() {
    this.router.navigate(['/profile']);
  }

  logout() {
    window.localStorage.clear();
    this.router.navigate(['/login']);
  }
}
