import { Location } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { InviteService } from '@services/invite/invite.service';
import { NzMessageService } from 'ng-zorro-antd/message';

import { IGroup } from '@models:/Group';
import { GroupService } from '@services/group/group.service';

@Component({
  selector: 'app-invite-user',
  templateUrl: './invite-user.component.html',
  styleUrls: ['./invite-user.component.scss']
})
export class InviteUserComponent {
  @Input() isVisible: boolean = false;
  @Output() isVisibleChange = new EventEmitter<boolean>();

  @Input()
  group!: IGroup;

  formGroup!: FormGroup;
  isUploading: boolean = false;

  constructor(private route: ActivatedRoute,
              private fb: FormBuilder,
              private groupService: GroupService,
              private inviteService: InviteService,
              private _location: Location,
              private message: NzMessageService) {
    this.formGroup = this.fb.group({
      mail: [null, [Validators.required, Validators.email]]
    });
  }

  inviteMember(): void {
    for (const i in this.formGroup.controls) {
      this.formGroup.controls[i].markAsDirty();
      this.formGroup.controls[i].updateValueAndValidity();
    }

    if (this.formGroup.valid) {
      const groupId = this.group.id!;
      const inviteeMail = this.formGroup.controls['mail'].value;

      this.isUploading = true;

      this.inviteService.createInvite(groupId, inviteeMail).subscribe(() => {
        this.message.create('success', `Successfully invited ${inviteeMail} for ${this.group.name}!`);
        this.isUploading = false;
        this.closeInviteModal();
      }, error => {
        this.isUploading = false;
        // TODO: Add convenient way to present errors at the frontend.
      });
    }
  }

  closeInviteModal(): void {
    this.isVisibleChange.next(false);
  }
}
