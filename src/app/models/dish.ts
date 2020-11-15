import { IIngredient } from '@models:/ingredient';
import { IUser } from '@models:/user';

export interface IDish {
  readonly id?: string;
  readonly author: IUser | null;

  name: string;
  amountOfPeople: number;
  ingredients: IIngredient[];
  instructions: string[];
}

