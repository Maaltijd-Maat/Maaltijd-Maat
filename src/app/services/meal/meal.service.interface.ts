import { IDish } from '@models:/dish';
import { IMeal } from '@models:/meal.model';
import { Observable } from 'rxjs';

export interface IMealService {
  /**
   * Creates a new meal from group ID and planned for date.
   * @param groupId the ID of the group from which a new meal is scheduled
   * @param plannedFor the scheduled date for the new meal
   * @return the created meal as observable
   */
  createMeal(groupId: String, plannedFor: Date): Observable<IMeal>;

  /**
   * Retrieve meal by ID if meal is found.
   * Otherwise it will return null.
   * @param id the ID of the requested group
   * @return the requested meal as observable; null if there's no meal found
   */
  getMeal(id:  string): Observable<IMeal>;

  /**
   * Retrieve all the user's meals.
   * @return a list of meals as observable
   */
  getMeals(): Observable<IMeal[]>;

  /**
   * Suggest a dish to a meal.
   * @param mealId the ID of the group the meal is planned for
   * @param dish the suggested dish
   */
  suggestDish(mealId: string, dish: IDish): void;
}
