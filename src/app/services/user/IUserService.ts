import {User} from '../../models/user';

export interface IUserService {

  /**
   * Register newly created user.
   *
   * @param user - newly create user object.
   */
  registerUser(user: User): void;

  /**
   * Authenticate the user by credentials.
   *
   * @param user - user object for the credentials.
   * @return authentication token for further use of the backend calls.
   */
  authenticateUser(user: User): string;

  /**
   * Change the user information by updating.
   *
   * @param user - the user object with changes.
   */
  updateUser(user: User): void
}
