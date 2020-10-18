import { Component, OnInit } from '@angular/core';
import { Location} from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GroupService } from '@services/group/group.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { DishService } from '@services/dish/dish.service';

@Component({
  selector: 'app-new-group',
  templateUrl: './new-group.component.html',
  styleUrls: ['./new-group.component.scss']
})
export class NewGroupComponent implements OnInit {
  formGroup!: FormGroup;

  constructor(private fb: FormBuilder, private groupService: GroupService,
              private _location: Location, private message: NzMessageService) {
  }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      name: [null, [Validators.required]]
    });
  }

  submitForm(): void {
    for (const i in this.formGroup.controls) {
      this.formGroup.controls[i].markAsDirty();
      this.formGroup.controls[i].updateValueAndValidity();
    }

    const groupName = this.formGroup.controls['name'].value;

    if (this.formGroup.valid) {
      this.groupService.createGroup(groupName).subscribe(() => {
        this.message.create('success', `Successfully added ${groupName}!`)
        this._location.back();
      }, error => {
        // TODO: Add convenient way to present errors at the frontend.
      });
    }
  }

}
