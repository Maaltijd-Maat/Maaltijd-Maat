import { IInvite } from '@models:/invite';
import { IInviteService } from '@services/invite/IInviteService';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InviteService implements IInviteService {
  private readonly endpoint: string = '/invite';
  private readonly url: string = environment.apiUrl + this.endpoint;

  constructor(private http: HttpClient) {
  }

  public createInvite(groupId: string, inviteeMail: string): Observable<IInvite> {
    const params = new HttpParams()
      .set('groupId', groupId.trim())
      .set('inviteeMail', inviteeMail.trim());

    return this.http.post<IInvite>(this.url, null,{ params })
  }

  public getInvite(id: string): Observable<IInvite> {
    const url = `${this.url}/${id}`;
    return this.http.get<IInvite>(url);
  }
}
