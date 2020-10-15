import { ICredentials } from '@models:/credentials';

export interface IAuthenticateService {
  /**
   * Authenticate the user by credentials.
   *
   * @param credentials - credentials object for the user credentials.
   * @return authentication token for further use of the backend calls.
   */
  authenticateUser(credentials: ICredentials): void;
}
