import { IGroup } from '@models:/Group';
import { IMealSuggestion } from '@models:/mealSuggestion';
import { IUser } from '@models:/user';
import { EventColor } from 'calendar-utils';

export interface IMeal {
  readonly id: string;
  title: string;
  start: Date;
  end: Date;
  color: EventColor;
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
