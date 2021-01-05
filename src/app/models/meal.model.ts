import { IGroup } from '@models:/Group';
import { ISuggestion } from '@models:/suggestion';
import {IAttendee} from '@models:/Attendee';
import { IUser } from '@models:/user';
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
  attendees: IAttendee[];
}

export interface ICreateMeal {
  title: string;
  groupId: string;
  start: Date;
  end: Date;
  description: string;
}
