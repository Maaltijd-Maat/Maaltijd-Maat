import { HttpClient, HttpParams } from '@angular/common/http';
import { IDish } from '@models:/dish';
import { IMeal } from '@models:/meal.model';
import { IMealService } from '@services/meal/meal.service.interface';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export class mealService implements IMealService {
  private readonly endpoint: string = '/meal';
  private readonly url: string = environment.apiUrl + this.endpoint;

  constructor(private http: HttpClient) {
  }

  public createMeal(groupId: String, plannedFor: Date): Observable<IMeal> {
    const params = new HttpParams()
      .set('groupId', groupId.trim());

    return this.http.post<IMeal>(this.url, plannedFor, { params });
  }

  public getMeal(id: string): Observable<IMeal> {
    const url = `${this.url}/${id}`;
    return this.http.get<IMeal>(url);
  }

  public getMeals(): Observable<IMeal> {
    return this.http.get<IMeal>(this.url);
  }

  public suggestDish(dish: IDish): void {
  }
}
