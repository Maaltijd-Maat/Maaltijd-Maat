import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IGroup } from '@models:/Group';

@Component({
  selector: 'app-group-users',
  templateUrl: './group-users.component.html',
  styleUrls: ['./group-users.component.scss']
})
export class GroupUsersComponent {
  public group?: IGroup;

  constructor(private route: ActivatedRoute) {
    // Retrieve groups object from the groups resolver
    this.route.data.subscribe((data) => {
      this.group = data.group;
    });
  }
}
