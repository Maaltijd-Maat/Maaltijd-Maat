import { Observable } from 'rxjs';
import { IInvite } from '@models:/invite.model';

export interface IInviteService {
  createInvite(groupId: string, inviteeMail: string): Observable<IInvite>;

  getInvite(id: string): Observable<IInvite>;

  getInvites(): Observable<IInvite[]>;

  acceptInvite(id: string): Observable<IInvite>;

  declineInvite(id: string): Observable<IInvite>;
}
