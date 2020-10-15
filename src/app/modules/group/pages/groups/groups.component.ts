import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IGroup } from '@models:/Group';

@Component({
  selector: 'app-group',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent {
  public groups?: IGroup[];

  constructor(private route: ActivatedRoute) {
    // Retrieve groups object from the groups resolver
    this.route.data.subscribe((data) => {
      this.groups = data.groups;
    });
  }
}
