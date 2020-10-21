import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IInvite } from '@models:/invite';
import { InviteService } from '@services/invite/invite.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.scss']
})
export class InviteComponent {
  invite!: IInvite;

  constructor(private route: ActivatedRoute,
              private fb: FormBuilder,
              private inviteService: InviteService,
              private _location: Location,
              private message: NzMessageService) {
    // Retrieve invite object from the invite resolver
    this.route.data.subscribe((data) => {
      this.invite = data.invite;
    });
  }

  acceptInvite(): void {
    const id = this.invite.id;
    this.inviteService.acceptInvite(id).subscribe(() => {
      this.message.create('success', `Successfully accepted the invite for ${this.invite.group.name}!`)
      this._location.back();
    });
  }
}
