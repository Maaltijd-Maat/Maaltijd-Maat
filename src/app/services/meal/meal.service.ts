import { IDish } from '@models:/dish';
import { IMeal } from '@models:/meal';
import { IMealService } from '@services/meal/meal.interface.service';
import { Observable } from 'rxjs';

export class mealService implements IMealService {
  public createMeal(): Observable<IMeal> {
    return undefined;
  }

  public getMeal(id: string): Observable<IMeal> {
    return undefined;
  }

  public getMeals(): Observable<IMeal> {
    return undefined;
  }

  public suggestDish(dish: IDish): void {
  }
}
