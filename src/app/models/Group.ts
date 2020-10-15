import { IUser } from '@models:/user';

export interface IGroup {
  readonly id?: string;
  name: string;
  owner: IUser;
  members: IUser[];
}
