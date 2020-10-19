import { Component } from '@angular/core';
import { Location} from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IGroup } from '@models:/Group';
import { GroupService } from '@services/group/group.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { SharedGroupService } from '../../shared-group.service';

@Component({
  selector: 'app-new-group',
  templateUrl: './new-group.component.html',
  styleUrls: ['./new-group.component.scss']
})
export class NewGroupComponent {
  formGroup!: FormGroup;

  constructor(private fb: FormBuilder, private groupService: GroupService,
              private _location: Location, private message: NzMessageService,
              private sharedGroupService: SharedGroupService) {
    this.formGroup = this.fb.group({
      name: [null, [Validators.required]]
    });
  }

  /**
   * Create group and uploads it to the backend.
   */
  createGroup(): void {
    for (const i in this.formGroup.controls) {
      this.formGroup.controls[i].markAsDirty();
      this.formGroup.controls[i].updateValueAndValidity();
    }

    const groupName = this.formGroup.controls['name'].value;

    if (this.formGroup.valid) {
      this.groupService.createGroup(groupName).subscribe((group: IGroup) => {
        this.message.create('success', `Successfully added ${groupName}!`)
        this.sharedGroupService.emitCreate(group.id!);
      }, error => {
        // TODO: Add convenient way to present errors at the frontend.
      });
    }
  }

}
