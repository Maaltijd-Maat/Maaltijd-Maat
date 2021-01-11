import { Observable } from 'rxjs';
import { IDish } from '@models:/dish.model';

export interface IDishService {

  /**
   * Returns the requested dish by id.
   *
   * @param id - Id of requested dish
   */
  getDish(id: string): Observable<IDish>;

  /**
   * Retrieves all dishes.
   */
  getDishes(): Observable<IDish[]>;

  /**
   * Upload new dish.
   *
   * @param dish - DishModel that needs to be uploaded
   */
  postDish(dish: IDish): Observable<object>;

  /**
   * Updates existing dish.
   *
   * @param id    - Id of dish that needs to be updated
   * @param dish  - Updated dish
   */
  putDish(id: string, dish: IDish): Observable<object>;

  /**
   * Deletes a specified dish by id.
   *
   * @param id - Id of the to be deleted dish
   */
  deleteDish(id: string): Observable<object>;
}
