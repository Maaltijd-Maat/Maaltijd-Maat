import { IGroup } from '@models:/Group';
import { IMealSuggestion } from '@models:/mealSuggestion';
import { IUser } from '@models:/user';

export interface IMeal {
  readonly id: string;
  title: string;
  start: Date;
  end: Date;
  readonly group: IGroup;
  readonly createdBy: IUser;
  readonly suggestions: IMealSuggestion[];
}

export interface ICreateMeal {
  title: string;
  groupId: string;
  start: Date;
  end: Date;
  description: string;
}
