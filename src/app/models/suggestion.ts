import { IDish } from '@models:/dish';
import { IUser } from '@models:/user';

export interface ISuggestion {
  readonly  id?: String;
  title: String;
  description: String;
  readonly suggester?: IUser | undefined;
  dish: IDish;
}
