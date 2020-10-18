import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IGroup } from '@models:/Group';

@Component({
  selector: 'app-group-details',
  templateUrl: './group-details.component.html',
  styleUrls: ['./group-details.component.scss']
})
export class GroupDetails {
  public group!: IGroup;

  constructor(private route: ActivatedRoute) {
    // Retrieve groups object from the groups resolver
    this.route.data.subscribe((data) => {
      this.group = data.group;
    });
  }
}
