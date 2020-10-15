import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { IGroup } from '@models:/Group';
import { GroupService } from '@services/group/group.service';

@Injectable({
  providedIn: 'root'
})
/**
 * This resolver ensures that the selected group is available before loading/showing the page.
 */
export class GroupResolver implements Resolve<IGroup> {
  constructor(private service: GroupService) {}

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IGroup> | Promise<IGroup> | IGroup {
    return this.service.getGroup(route.params['id']);
  }
}
