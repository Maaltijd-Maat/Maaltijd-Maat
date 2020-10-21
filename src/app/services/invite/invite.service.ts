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

  /**
   * Creates a new group invite.
   * @param groupId - ID of the group you want to invite the user to
   * @param inviteeMail - email of the user you want to invite to the group
   */
  public createInvite(groupId: string, inviteeMail: string): Observable<IInvite> {
    const params = new HttpParams()
      .set('groupId', groupId.trim())
      .set('inviteeMail', inviteeMail.trim());

    return this.http.post<IInvite>(this.url, null,{ params })
  }

  /**
   * Returns the specified invite if it exists.
   * @param id - ID of the requested group
   */
  public getInvite(id: string): Observable<IInvite> {
    const url = `${this.url}/${id}`;
    return this.http.get<IInvite>(url);
  }

  /**
   * Accept invite.
   * @param id - id of the invite
   */
  public acceptInvite(id: string): Observable<IInvite> {
    const url = `${this.url}/${id}/accept`;
    return this.http.post<IInvite>(url, null);
  }

  /**
   * Decline invite
   * @param id - invite of the invite
   */
  public declineInvite(id: string): Observable<IInvite> {
    const url = `${this.url}/${id}/decline`;
    return this.http.post<IInvite>(url, null);
  }
}
