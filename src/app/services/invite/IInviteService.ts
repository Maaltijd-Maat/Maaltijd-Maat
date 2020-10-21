import { Observable } from 'rxjs';
import { IInvite } from '@models:/invite';

export interface IInviteService {
  createInvite(groupId: string, inviteeMail: string): Observable<IInvite>;

  getInvite(id: string): Observable<IInvite>;
}
