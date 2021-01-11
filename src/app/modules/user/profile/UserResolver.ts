import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {IUser} from '@models:/user.model';
import {UserService} from '@services/user/user.service';

@Injectable({
  providedIn: 'root'
})
/**
 * This resolver ensures that the user's groups are available before loading/showing the page.
 */
export class UserResolver implements Resolve<IUser> {
  constructor(private service: UserService) {}

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IUser> | Promise<IUser> | IUser {
    return this.service.getUserInformation();
  }
}
