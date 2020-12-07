import { IDish } from '@models:/dish';
import { IMeal } from '@models:/meal';
import { Observable } from 'rxjs';

export interface IMealService {
  createMeal(): Observable<IMeal>;

  getMeal(id:  string): Observable<IMeal>;

  getMeals(): Observable<IMeal>;

  suggestDish(dish: IDish): void;
}
