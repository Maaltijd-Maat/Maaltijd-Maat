import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { IMeal } from '@models:/meal.model';
import { MealService } from '@services/meal/meal.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
/**
 * This resolver ensures that the user's meals are available before loading/showing the page.
 */
export class MealsResolver implements Resolve<IMeal[]> {
  constructor(private service: MealService) {}

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IMeal[]> | Promise<IMeal[]> | IMeal[] {
    return this.service.getMeals();
  }
}
