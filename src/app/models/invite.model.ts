import { IGroup } from '@models:/group.model';
import { IUser } from '@models:/user.model';

export interface IInvite {
  readonly id: string;
  readonly group: IGroup;
  readonly inviter: IUser;
  readonly invitee: IUser;
}
