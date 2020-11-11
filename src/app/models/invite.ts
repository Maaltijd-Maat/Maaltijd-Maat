import { IGroup } from '@models:/Group';
import { IUser } from '@models:/user';

export interface IInvite {
  readonly id: string;
  readonly group: IGroup;
  readonly inviter: IUser;
  readonly invitee: IUser;
}
