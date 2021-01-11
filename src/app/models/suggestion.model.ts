import { IDish } from '@models:/dish.model';
import { IUser } from '@models:/user.model';

export interface ISuggestion {
  readonly  id?: string;
  title: string;
  description: string;
  readonly suggester?: IUser | undefined;
  dish: IDish;
}
