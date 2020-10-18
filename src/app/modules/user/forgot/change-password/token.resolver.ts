import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
/**
 * This resolver ensures that the token is valid and exists before loading the change password page.
 */
export class TokenResolver implements Resolve<string> {
  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return route.params['token'];
  }
}
