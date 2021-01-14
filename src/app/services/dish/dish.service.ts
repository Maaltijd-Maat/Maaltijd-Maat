import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDish } from '@models:/dish.model';
import { IDishService } from '@services/dish/IDishService';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment';

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

  deleteDish(id: string): Observable<IDish> {
    const url = `${this.url}/${id}`;
    return this.http.delete<IDish>(url);
  }

  getDish(id: string): Observable<IDish> {
    const url = `${this.url}/${id}`;
    return this.http.get<IDish>(url);
  }

  getDishes(): Observable<IDish[]> {
    return this.http.get<IDish[]>(this.url);
  }

  postDish(dish: IDish): Observable<Object> {
    return this.http.post<IDish>(this.url, dish, this.httpOptions);
  }

  putDish(id: string, dish: IDish): Observable<Object> {
    const url = `${this.url}/${id}`;
    return this.http.put<IDish>(url, dish, this.httpOptions);
  }
}
