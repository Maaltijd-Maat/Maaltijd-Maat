import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IGroup } from '@models:/Group';
import { GroupService } from '@services/group/group.service';
import { SharedGroupService } from '../../shared-group.service';

@Component({
  selector: 'app-group',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent {
  public groups!: IGroup[];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private groupService: GroupService,
              private sharedGroupService: SharedGroupService) {
    // Retrieve groups object from the groups resolver
    this.route.data.subscribe((data) => {
      this.groups = data.groups;
    });

    // Update side menu upon new group created
    this.sharedGroupService.createGroupEmitted$.subscribe((id: string) => {
      this.refreshList();
      this.navigateToGroup(id);
    })

    // Update side menu upon group updated
    this.sharedGroupService.createGroupEmitted$.subscribe(() => {
      this.refreshList();
    })

    // Update side menu upon group deleted
    this.sharedGroupService.deleteGroupEmitted$.subscribe(() => {
      this.refreshList();
      this.navigateToGroup(this.groups![0].id!)
    })

    // Navigate to first group in list if list of groups is not empty
    if (this.groups.length > 0) {
      this.navigateToGroup(this.groups[0].id!)
    }
  }

  private refreshList() {
    this.groupService.getGroups().subscribe((groups) => {
      this.groups = groups;
    })
  }

  private navigateToGroup(id: string) {
    this.router.navigate(['group', id], { relativeTo: this.route });
  }
}
