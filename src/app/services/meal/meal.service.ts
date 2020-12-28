import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IDish } from '@models:/dish';
import { ICreateMeal, IMeal } from '@models:/meal.model';
import { IMealService } from '@services/meal/meal.service.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import {ISuggestion} from "@models:/suggestion";
import {IGroup} from "@models:/Group";

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
        meal.startDate = new Date(meal.startDate);
        meal.endDate = new Date(meal.endDate);
        return meal;
      })
    );
  }

  public getMeals(): Observable<IMeal[]> {
    return this.http.get<IMeal[]>(this.url).pipe(
      map(meals => {
        return meals.map(meal => {
          meal.startDate = new Date(meal.startDate);
          meal.endDate = new Date(meal.endDate);
          return meal;
        })
      })
    )
  }

  public updateMeal(meal: IMeal): Observable<IMeal> {
    return this.http.put<IMeal>(this.url, meal);
  }

  public suggestDish(meal: IMeal, suggestion: ISuggestion): Observable<ISuggestion> {
    let observable: Observable<ISuggestion> = this.http.post<ISuggestion>(this.url + "/suggestion", suggestion);
    meal.suggestions = [];
    meal.suggestions.push(suggestion);
    this.updateMeal(meal).subscribe((meal: IMeal) => {

    }, error => {

    });
    return observable;
  }
}
