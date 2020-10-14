import { IUser } from '@models:/user';
import {Observable} from 'rxjs';
import {IDish} from '@models:/dish';

export interface IUserService {

  /**
   * Register newly created user.
   *
   * @param user - newly create user object.
   */
  registerUser(user: IUser): void;

  /**
   * Change the user information by updating.
   *
   * @param user - the user object with changes.
   */
  updateUser(user: IUser): void
}
