import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { IInvite } from '@models:/invite.model';
import { InviteService } from '@services/invite/invite.service';

@Injectable({
  providedIn: 'root'
})
/**
 * This resolver ensures that the requested invite is available before loading/showing the page.
 */
export class InviteResolver implements Resolve<IInvite> {
  constructor(private service: InviteService) {}

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IInvite> | Promise<IInvite> | IInvite {
    return this.service.getInvite(route.params['id']);
  }
}
