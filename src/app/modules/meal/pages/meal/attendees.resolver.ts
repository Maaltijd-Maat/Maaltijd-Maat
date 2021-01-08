import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {MealService} from '@services/meal/meal.service';
import {Observable} from 'rxjs';
import {IAttendee} from '@models:/Attendee';

@Injectable({
  providedIn: 'root'
})
/**
 * This resolver ensures that the user's meals are available before loading/showing the page.
 */
export class AttendeesResolver implements Resolve<IAttendee[]> {
  constructor(private service: MealService) {}

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IAttendee[]> | Promise<IAttendee[]> | IAttendee[] {
    return this.service.getAttendees(route.params['id']);
  }
}
