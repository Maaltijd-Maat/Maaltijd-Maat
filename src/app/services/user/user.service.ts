import {Injectable} from '@angular/core';
import {IUserService} from './IUserService';
import {User} from '../../models/user';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService implements IUserService{
  private readonly endpoint: string = '/user';
  private readonly url: string = environment.apiUrl + this.endpoint;

  private readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };


  constructor(private http: HttpClient) {
    this.http = http;
  }

  authenticateUser(user: User): string {
    return '';
  }

  registerUser(user: User) {
    return new Promise((resolve, reject)=>{
      this.http
        .post(this.url, user, this.httpOptions)
        .pipe(catchError((err: Response)=>{
          reject((err.statusText));
          return throwError(err);
        })).subscribe(data => { resolve(data) })
    })
  }

  updateUser(user: User): void {}

}
