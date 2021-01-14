import { Injectable } from '@angular/core';
import { IUserService } from './IUserService';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';

import { IUser } from '@models:/user.model';
import {CredentialsModel, ICredentials} from '@models:/credentials.model';

@Injectable({
  providedIn: 'root'
})
export class UserService implements IUserService {
  private readonly endpoint: string = '/user';
  private readonly url: string = environment.apiUrl + this.endpoint;

  private readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {
    this.http = http;
  }

  /**
   * Register user http call to backend API
   * @param user object with necessary information.
   */
  registerUser(user: IUser) {
    return new Promise((resolve, reject) => {
      this.http
        .post(this.url, user, this.httpOptions)
        .pipe(catchError((err: Response) => {
          reject((err.statusText));
          return throwError(err);
        })).subscribe(data => { resolve(data); });
    });
  }

  /**
   * Endpoint to change the password with password token
   * @param credentials that exists of the password token and the new password.
   */
  changePasswordWithPasswordToken(credentials: CredentialsModel) {
    return new Promise((resolve, reject) => {
      this.http
        .post(this.url + "/change-password", credentials, this.httpOptions)
        .pipe(catchError((err: Response) => {
          reject((err.statusText));
          return throwError(err);
        })).subscribe(data => { resolve(data); });
    });
  }

  /**
   * Update existing user into database by http call to backend.
   * @param user object with changes.
   */
  updateUser(user: IUser) {
    return new Promise((resolve, reject) => {
      this.http
        .put(this.url + '/update-information', user, this.httpOptions)
        .pipe(catchError((err: Response) => {
          reject((err.statusText));
          return throwError(err);
        })).subscribe(data => { resolve(data); });
    });
  }

  /**
   * Request password change token that will be sent to the users email address if found.
   */
  resetPassword(login: ICredentials) {
    return new Promise((resolve, reject) => {
      this.http
        .post(this.url + "/reset-password", login, this.httpOptions)
        .pipe(catchError((err: Response) => {
          reject((err.statusText));
          return throwError(err);
        })).subscribe(data => { resolve(data); });
    });
  }

  /**
   * Gets all the user information with the token.
   */
  getUserInformation(): Observable<IUser>{
    return this.http.get<IUser>(this.url + "/information");
  }




}
