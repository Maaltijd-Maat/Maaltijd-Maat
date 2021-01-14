import { environment } from '../../../environments/environment';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IAuthenticateService } from '@services/authenticate/IAuthenticateService';
import { ICredentials } from '@models:/credentials.model';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import {CanActivate, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService implements IAuthenticateService, CanActivate {

  private readonly endpoint: string = '/authenticate';
  private readonly url: string = environment.apiUrl + this.endpoint;

  constructor(private http: HttpClient, public jwtHelper: JwtHelperService, public router: Router) {
    this.http = http;
  }

  /**
   * If user is authenticate let them pass otherwise go to login.
   */
  canActivate(): boolean {
    if (!this.isAuthenticated()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }

  /**
   * Authenticate user and get JWT token.
   * @param credentials object with only email and password.
   */
  authenticateUser(credentials: ICredentials) {
    return new Promise((resolve, reject) => {
      this.http
        .post(this.url, credentials, { responseType: 'text' })
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
   * Checks if the token is not expired by decoding the claim.
   */
  public isAuthenticated(): boolean{
    return !this.jwtHelper.isTokenExpired(this.getToken());
  }

  /**
   * Sets the JWT token in the localStorage of the application.
   * @param token JWT token from the backend
   */
  saveToken(token: string) {
    if (token) localStorage.setItem('token', token);
  }

  /**
   * Get the token from the local storage if stored
   * @return token string
   */
  getToken(): string {
    return localStorage.getItem('token') || '';
  }
}
