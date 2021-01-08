import { IMeal, ICreateMeal } from '@models:/meal.model';
import { Observable } from 'rxjs';
import {ISuggestion} from "@models:/suggestion";
import {IAttendee} from '@models:/Attendee';

export interface IMealService {
  /**
   * Creates a new meal from group ID and planned for date.
   *
   * @param meal the meal that needs to be created
   * @return the created meal as observable
   */
  createMeal(meal: ICreateMeal): Observable<IMeal>;

  /**
   * Retrieve meal by ID if meal is found.
   * Otherwise it will return null.
   *
   * @param id the ID of the requested group
   * @return the requested meal as observable; null if there's no meal found
   */
  getMeal(id:  string): Observable<IMeal>;

  /**
   * Retrieve all the user's meals.
   *
   * @return a list of meals as observable
   */
  getMeals(): Observable<IMeal[]>;

  /**
   * Suggest a dish to a meal.
   *
   * @param suggestion the suggested object with information
   */
  suggestDish(suggestion: ISuggestion): void;

  /**
   * Update the meal with new information.
   *
   * @param meal object with the changes.
   */
  updateMeal(meal: IMeal): Observable<IMeal>;

  /**
   * Create or update the attendee for the specific meal.
   *
   * @param attendee the attendee with the meal inside.
   */
  createOrUpdateAttendee(attendee: IAttendee): Observable<IAttendee>;

  /**
   * Get all attendees for the specific meal by id of the meal.
   *
   * @param id meal id used for the search.
   */
  getAttendees(id: string): Observable<IAttendee[]>;
}
