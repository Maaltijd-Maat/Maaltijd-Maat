import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDishService } from './IDishService';
import { Dish } from '../models/dish';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DishService implements IDishService {
  private readonly endpoint: string = '/dish';
  private readonly url: string = environment.apiUrl + this.endpoint;

  constructor(private http: HttpClient) {
  }

  deleteDish(id: number): void {
    // TODO
  }

  getDish(id: number): Observable<Dish> {
    // TODO
    return this.http.get<Dish>(this.url);
  }

  getDishes(): Observable<Dish[]> {
    // TODO
    return this.http.get<Dish[]>(this.url);
  }

  postDish(dish: Dish): void {
    console.log(dish);
    // TODO
  }

  putDish(dish: Dish): void {
    // TODO
  }
}
