import { IGroup } from '@models:/Group';
import { ISuggestion } from '@models:/suggestion';
import {IUser} from '@models:/user';
import {IAttendee} from '@models:/Attendee';

export interface IMeal {
  readonly id: string;
  title: string;
  start: Date;
  end: Date;
  description: string;
  readonly group: IGroup;
  readonly createdBy: IUser;
  suggestions: ISuggestion[];
  attendees: IAttendee[];
}

export interface ICreateMeal {
  title: string;
  groupId: string;
  start: Date;
  end: Date;
  description: string;
}
