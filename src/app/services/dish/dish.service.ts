import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDishService } from './IDishService';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { IDish } from '../models/dish'

@Injectable({
  providedIn: 'root'
})
export class DishService implements IDishService {
  private readonly endpoint: string = '/dish';
  private readonly url: string = environment.apiUrl + this.endpoint;

  private readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http: HttpClient) {
  }

  deleteDish(id: string): void {
    const url = `${this.url}/${id}`;
    this.http.get<IDish>(url);
  }

  getDish(id: string): Observable<IDish> {
    const url = `${this.url}/${id}`;
    return this.http.get<IDish>(url);
  }

  getDishes(): Observable<IDish[]> {
    return this.http.get<IDish[]>(this.url);
  }

  postDish(dish: IDish): void {
    this.http.post(this.url, dish, this.httpOptions).subscribe();
  }

  putDish(id: string, dish: IDish): void {
    const url = `${this.url}/${id}`;
    this.http.put(url, dish).subscribe();
  }
}
