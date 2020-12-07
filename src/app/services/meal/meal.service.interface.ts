import { IDish } from '@models:/dish';
import { IMeal } from '@models:/meal.model';
import { Observable } from 'rxjs';

export interface IMealService {
  createMeal(groupId: String, plannedFor: Date): Observable<IMeal>;

  getMeal(id:  string): Observable<IMeal>;

  getMeals(): Observable<IMeal[]>;

  suggestDish(dish: IDish): void;
}
