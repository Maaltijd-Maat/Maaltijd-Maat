import {Component, OnInit} from '@angular/core';

import {ActivatedRoute, Router} from '@angular/router';
import {IUser} from '@models:/user.model';
import {AuthenticateService} from '@services/authenticate/authenticate.service';

@Component({
  selector: 'app-profile-component',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  public user!: IUser;

  constructor(private route: ActivatedRoute, private router: Router) {
    // Retrieve user object from the user resolver
    this.route.data.subscribe((data) => {
      this.user = data.user;
    });
    this.router.navigate(['/profile/information'], {state: {user: this.user}});
  }
}
