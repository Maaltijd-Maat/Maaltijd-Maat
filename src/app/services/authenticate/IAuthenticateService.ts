import { ICredentials } from '@models:/credentials';

export interface IAuthenticateService {
  /**
   * Authenticate the user by credentials.
   *
   * @param credentials - credentials object for the user credentials.
   * @return authentication token for further use of the backend calls.
   */
  authenticateUser(credentials: ICredentials): void;

  /**
   * Checks if the user is authenticated
   *
   * @return true if the token is valid else it will be false.
   */
  isAuthenticated(): boolean;
}
