import {IUser} from '@models:/user';
import {IMeal} from '@models:/meal.model';

export interface IAttendee {
  readonly  id?: String;
  status: string;
  meal: IMeal;
  readonly attendee?: IUser;

}

export class Attendee implements IAttendee{
  status: string;
  meal: IMeal;

  constructor(status: string, meal: IMeal) {
    this.status = status;
    this.meal = meal;
  }
}
