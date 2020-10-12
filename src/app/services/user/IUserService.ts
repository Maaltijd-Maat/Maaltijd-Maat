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
   * Authenticate the user by credentials.
   *
   * @param user - user object for the credentials.
   * @return authentication token for further use of the backend calls.
   */
  authenticateUser(user: IUser): void;

  /**
   * Change the user information by updating.
   *
   * @param user - the user object with changes.
   */
  updateUser(user: IUser): void
}
