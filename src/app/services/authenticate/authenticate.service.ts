import {IUser} from '@models:/user';
import {environment} from '../../../environments/environment';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {IAuthenticateService} from '@services/authenticate/IAuthenticateService';
import {ICredentials} from '@models:/credentials';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class authenticateService implements IAuthenticateService{

  private readonly endpoint: string = '/authenticate';
  private readonly url: string = environment.apiUrl + this.endpoint;

  constructor(private http: HttpClient) {
    this.http = http;
  }

  /**
   * Authenticate user and get JWT token.
   * @param credentials object with only email and password.
   */
  authenticateUser(credentials: ICredentials) {
    return new Promise((resolve, reject) => {
      this.http
        .post(this.url, credentials, {responseType: 'text'})
        .pipe(catchError((err: Response) => {
          reject((err.statusText));
          return throwError(err);
        }))
        .subscribe(response => {
          this.saveToken(response);
          resolve(response);
        });
    });
  }

  /**
   * Sets the JWT token in the localStorage of the application.
   * @param token JWT token from the backend
   */
  saveToken(token: string){
    if (token) localStorage.setItem('token', token);
  }

  /**
   * Get the token from the local storage if stored
   * @return token string
   */
  getToken(): string{
    return localStorage.getItem('token') || '';
  }
}
