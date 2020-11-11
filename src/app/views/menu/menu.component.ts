import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu-component',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  isCollapsed = false;

  constructor(private router: Router) {}

  profile() {
    this.router.navigate(['/profile']);
  }

  help() {
    //TODO go to help page with instructions how to use the app.
    //this.router.navigate(['/help']);
  }

  logout() {
    window.localStorage.clear();
    this.router.navigate(['/login']);
  }
}
