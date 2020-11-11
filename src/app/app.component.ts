import {Component} from '@angular/core';
import {NavigationStart, Router} from "@angular/router";
import {AuthenticateService} from '@services/authenticate/authenticate.service';
import {createLogErrorHandler} from '@angular/compiler-cli/ngcc/src/execution/tasks/completion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showMenu = false;
  title: undefined;

  constructor(private router: Router, authenticateService: AuthenticateService) {
    //Dont show navigation menu at these pages
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        this.showMenu =
          !event.url.includes("register") &&
          !event.url.includes("login") &&
          !event.url.includes("forgot");
      }
    });

    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (!event.url.includes("register") && !event.url.includes("login") && !event.url.includes("forgot")) {
            if (authenticateService.getToken().length == 0) this.router.navigate(['/login']);
        }
      }
    });
  }
}
