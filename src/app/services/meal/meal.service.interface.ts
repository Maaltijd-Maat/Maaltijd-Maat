import { IMeal, ICreateMeal } from '@models:/meal.model';
import { Observable } from 'rxjs';
import {ISuggestion} from "@models:/suggestion";

export interface IMealService {
  /**
   * Creates a new meal from group ID and planned for date.
   * @param meal the meal that needs to be created
   * @return the created meal as observable
   */
  createMeal(meal: ICreateMeal): Observable<IMeal>;

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
   * @param meal
   * @param suggestion the suggested object with information
   */
  suggestDish(meal: IMeal, suggestion: ISuggestion): void;

  updateMeal(meal: IMeal): Observable<IMeal>;
}
