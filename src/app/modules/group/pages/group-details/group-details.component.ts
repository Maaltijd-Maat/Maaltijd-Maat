import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { IGroup } from '@models:/Group';
import { GroupService } from '@services/group/group.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { SharedGroupService } from '../../shared-group.service';

@Component({
  selector: 'app-group-details',
  templateUrl: './group-details.component.html',
  styleUrls: ['./group-details.component.scss']
})
export class GroupDetails {
  group!: IGroup;
  formGroup!: FormGroup;

  constructor(private route: ActivatedRoute,
              private fb: FormBuilder,
              private groupService: GroupService,
              private _location: Location,
              private message: NzMessageService,
              private sharedGroupService: SharedGroupService) {
    // Retrieve group object from the group resolver
    this.route.data.subscribe((data) => {
      this.group = data.group;

      // Fill form group with the dish data
      this.formGroup = this.fb.group({
        name: [this.group!.name, [Validators.required]]
      });
    });
  }

  updateGroup(): void {
    for (const i in this.formGroup.controls) {
      this.formGroup.controls[i].markAsDirty();
      this.formGroup.controls[i].updateValueAndValidity();
    }

    if (this.formGroup.valid) {
      const group: IGroup = this.group;
      group.name = this.formGroup.controls['name'].value;

      this.groupService.putGroup(this.group.id!, group).subscribe(() => {
        this.message.create('success', `Successfully updated ${group.name}!`);
        this.sharedGroupService.emitUpdate(this.group!.id!);
      }, error => {
        // TODO: Add convenient way to present errors at the frontend.
      });
    }
  }

  deleteGroup(): void {
    this.groupService.deleteGroup(this.group.id!).subscribe(() => {
      this.message.create('success', `Successfully deleted ${this.group.name}!`);
      this.sharedGroupService.emitDelete(this.group.id!);
    }, error => {
      // TODO: Add convenient way to present errors at the frontend.
    });
  }
}
