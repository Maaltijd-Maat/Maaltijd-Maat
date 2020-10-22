import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { DishService } from '@services/dish/dish.service';
import { IDish } from '@models:/dish';

@Injectable({
  providedIn: 'root'
})
/**
 * This resolver ensures that there are dishes available before loading/showing the page.
 */
export class DishesResolver implements Resolve<IDish[]> {
  constructor(private service: DishService) {}

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IDish[]> | Promise<IDish[]> | IDish[] {
    return this.service.getDishes();
  }
}
