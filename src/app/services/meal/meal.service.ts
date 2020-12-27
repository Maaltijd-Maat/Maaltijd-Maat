import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IDish } from '@models:/dish';
import { ICreateMeal, IMeal } from '@models:/meal.model';
import { IMealService } from '@services/meal/meal.service.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MealService implements IMealService {
  private readonly endpoint: string = '/meal';
  private readonly url: string = environment.apiUrl + this.endpoint;

  constructor(private http: HttpClient) {
  }

  public createMeal(meal: ICreateMeal): Observable<IMeal> {
    return this.http.post<IMeal>(this.url, meal);
  }

  public getMeal(id: string): Observable<IMeal> {
    const url = `${this.url}/${id}`;
    return this.http.get<IMeal>(url).pipe(
      map(meal => {
        meal.start = new Date(meal.start);
        meal.end = new Date(meal.end);
        return meal;
      })
    );
  }

  public getMeals(): Observable<IMeal[]> {
    return this.http.get<IMeal[]>(this.url).pipe(
      map(meals => {
        return meals.map(meal => {
          meal.start = new Date(meal.start);
          meal.end = new Date(meal.end);
          return meal;
        })
      })
    )
  }

  public suggestDish(mealId: string, dish: IDish): void {
  }
}
