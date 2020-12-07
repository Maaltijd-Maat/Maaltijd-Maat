import { IDish } from '@models:/dish';
import { IUser } from '@models:/user';

export interface IMealSuggestion {
  readonly suggester: IUser;
  dish: IDish;
}
