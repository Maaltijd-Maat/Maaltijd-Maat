import { IGroup } from '@models:/Group';
import { ISuggestion } from '@models:/suggestion';
import { IUser } from '@models:/user';

export interface IMeal {
  readonly id: string;
  title: string;
  startDate: Date;
  endDate: Date;
  start: Date;
  description: string;
  readonly group: IGroup;
  readonly createdBy: IUser;
  suggestions: ISuggestion[];
}

export interface ICreateMeal {
  title: string;
  groupId: string;
  startDate: Date;
  endDate: Date;
  description: string;
}
