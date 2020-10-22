import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { IInvite } from '@models:/invite';
import { InviteService } from '@services/invite/invite.service';

@Injectable({
  providedIn: 'root'
})
/**
 * This resolver ensures that the requested invites are available before loading/showing the page.
 */
export class InvitesResolver implements Resolve<IInvite[]> {
  constructor(private service: InviteService) {}

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IInvite[]> | Promise<IInvite[]> | IInvite[] {
    return this.service.getInvites();
  }
}
