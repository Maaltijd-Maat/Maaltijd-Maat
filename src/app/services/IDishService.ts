import { Observable } from 'rxjs';
import { Dish } from '../models/dish';

export interface IDishService {

  /**
   * Returns the requested dish by id.
   *
   * @param id - Id of requested dish
   */
  getDish(id: number): Observable<Dish>;

  /**
   * Retrieves all dishes.
   */
  getDishes(): Observable<Dish[]>;

  /**
   * Upload new dish.
   *
   * @param dish - Dish that needs to be uploaded
   */
  postDish(dish: Dish): void;

  /**
   * Updates existing dish.
   *
   * @param dish - Existing dish that needs to be updated
   */
  putDish(dish: Dish): void;

  /**
   * Deletes a specified dish by id.
   *
   * @param id - Id of the to be deleted dish
   */
  deleteDish(id: number): void;
}
