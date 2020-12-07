import { IMealSuggestion } from '@models:/mealSuggestion';
import { IUser } from '@models:/user';

export interface IMeal {
  readonly id?: string;
  plannedFor: Date;
  readonly createdBy: IUser;
  readonly suggestions: IMealSuggestion[];
}
