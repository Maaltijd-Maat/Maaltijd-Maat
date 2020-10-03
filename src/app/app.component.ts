import {Component} from '@angular/core';
import {NavigationStart, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showMenu = false;
  title: undefined;

  constructor(router:Router) {
    router.events.forEach((event) => {
      if(event instanceof NavigationStart) {
        this.showMenu = event.url !== "/register" && event.url !== "/login";
      }
    });
  }
}
