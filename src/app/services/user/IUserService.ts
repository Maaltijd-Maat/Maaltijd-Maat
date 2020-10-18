import { IUser } from '@models:/user';
import {Credentials, ICredentials} from '@models:/credentials';

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

  /**
   * Change password with password reset token.
   *
   * @param credentials token and new password.
   */
  changePasswordWithPasswordToken(credentials: Credentials): void

  /**
   * Request password reset token from backend.
   *
   * @param login only email address.
   */
  resetPassword(login: ICredentials): void
}
