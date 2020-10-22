import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IInvite } from '@models:/invite';
import { InviteService } from '@services/invite/invite.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'invites',
  templateUrl: './invites.component.html',
  styleUrls: ['./invites.component.scss']
})
export class InvitesComponent {
  invites!: IInvite[];
  loading: boolean = false;

  constructor(private route: ActivatedRoute,
              private fb: FormBuilder,
              private inviteService: InviteService,
              private _location: Location,
              private message: NzMessageService) {
    // Retrieve invite object from the invite resolver
    this.route.data.subscribe((data) => {
      this.invites = data.invites;
    });
  }

  public refreshInvites() {
    this.loading = true;
    this.inviteService.getInvites().subscribe((invites) => {
      this.invites = invites;
      this.loading = false;
    }, () => {
      // TODO error handling
      this.loading = false;
    });
  }
}
