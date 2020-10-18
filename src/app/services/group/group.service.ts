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

  constructor(private http: HttpClient) {
    this.http = http;
  }

  public createGroup(name: string): Observable<Object> {
    return this.http.post<IGroup>(this.url, name);
  }

  public getGroup(id: string): Observable<IGroup> {
    const url = `${this.url}/${id}`;
    return this.http.get<IGroup>(url);
  }

  public getGroups(): Observable<IGroup[]> {
    return this.http.get<IGroup[]>(this.url);
  }
}
