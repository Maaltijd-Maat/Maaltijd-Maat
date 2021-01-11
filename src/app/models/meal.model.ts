import { IGroup } from '@models:/group.model';
import { ISuggestion } from '@models:/suggestion.model';
import { IUser } from '@models:/user.model';
import { EventColor } from 'calendar-utils';

export interface IMeal {
  readonly id: string;
  title: string;
  start: Date;
  end: Date;
  color: EventColor;
  description: string;
  readonly group: IGroup;
  readonly createdBy: IUser;
  suggestions: ISuggestion[];
}

export interface ICreateMeal {
  title: string;
  groupId: string;
  start: Date;
  end: Date;
  description: string;
}
