import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IGroup } from '@models:/Group';
import { IGroupService } from '@services/group/IGroupService';

@Injectable({
  providedIn: 'root'
})
export class GroupService implements IGroupService {
  private readonly endpoint: string = '/group';
  private readonly url: string = environment.apiUrl + this.endpoint;

  private readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {
    this.http = http;
  }

  public createGroup(group: IGroup): void {
    // TODO
  }

  public getGroup(id: string): Observable<IGroup> {
    const url = `${this.url}/${id}`;
    return this.http.get<IGroup>(url);
  }

  public getGroups(): Observable<IGroup[]> {
    return this.http.get<IGroup[]>(this.url);
  }
}
