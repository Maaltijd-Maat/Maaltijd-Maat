import { IUser } from '@models:/user.model';
import { IMeal } from '@models:/meal.model';

export interface IAttendee {
  readonly  id?: string;
  status: string;
  meal: IMeal;
  readonly attendee?: IUser;
}
