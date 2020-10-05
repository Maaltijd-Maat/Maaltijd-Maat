import { Injectable } from '@angular/core';
import { IUserService } from './IUserService';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

import { IUser } from '@models:/user';

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

  authenticateUser(user: IUser): string {
    return '';
  }

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

  updateUser(user: IUser): void {}

}
