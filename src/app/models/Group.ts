import { IUser } from '@models:/user';

export interface IGroup {
  readonly id?: string;
  name: string;
  readonly owner: IUser;
  readonly members: IUser[];
  readonly color?: string;
}
