import { IUser } from '@models:/user.model';

export interface IGroup {
  readonly id?: string;
  name: string;
  readonly owner: IUser;
  readonly members: IUser[];
  readonly color?: string;
}
