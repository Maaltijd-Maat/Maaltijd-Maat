import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICreateMeal, IMeal } from '@models:/meal.model';
import { IMealService } from '@services/meal/meal.service.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { ISuggestion } from "@models:/suggestion";
import { IAttendee } from '@models:/Attendee';

@Injectable({
  providedIn: 'root'
})
export class MealService implements IMealService {
  private readonly endpoint: string = '/meal';
  private readonly url: string = environment.apiUrl + this.endpoint;

  constructor(private http: HttpClient) {
  }

  public createMeal(meal: ICreateMeal): Observable<IMeal> {
    return this.http.post<IMeal>(this.url, meal).pipe(
      map(meal => this.transformMeal(meal))
    );
  }

  public getMeal(id: string): Observable<IMeal> {
    const url = `${this.url}/${id}`;
    return this.http.get<IMeal>(url).pipe(
      map(meal => this.transformMeal(meal))
    );
  }

  public getMeals(): Observable<IMeal[]> {
    return this.http.get<IMeal[]>(this.url).pipe(
      map(meals => {
        return meals.map(meal => this.transformMeal(meal));
      })
    );
  }

  public updateMeal(meal: IMeal): Observable<IMeal> {
    return this.http.put<IMeal>(this.url, meal);
  }

  public suggestDish(suggestion: ISuggestion): Observable<ISuggestion> {
    return this.http.post<ISuggestion>(this.url + "/suggestion", suggestion);
  }

  public createOrUpdateAttendee(attendee: IAttendee): Observable<IAttendee>{
    return this.http.put<IAttendee>(this.url + "/attendee", attendee);
  }

  public getAttendees(id: string): Observable<IAttendee[]>{
    const url = `${this.url}/attendee/${id}`;
    return this.http.get<IAttendee[]>(url);
  }

  private transformMeal(meal: IMeal) {
    meal.start = new Date(meal.start);
    meal.end = new Date(meal.end);

    meal.color = {
      primary: meal.group.color!,
      secondary: meal.group.color!
    };

    return meal;
  }
}

