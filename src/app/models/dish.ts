import { IIngredient } from '@models:/ingredient';
import { IUser } from '@models:/user';

export interface IDish {
  readonly id?: string;
  readonly author?: IUser | null;

  name: string;
  amountOfPeople: number;
  ingredients: IIngredient[];
  instructions: string[];
}

export class Dish implements IDish {
  readonly id?: string;
  readonly author?: IUser;

  name: string;
  amountOfPeople: number;
  ingredients: IIngredient[];
  instructions: string[];

  constructor(name: string,
              instructions: string[], ingredients: IIngredient[], amountOfPeople: number, author?: IUser,) {
    this.name = name;
    this.author = author;

    this.instructions = instructions;
    this.ingredients = ingredients;
    this.amountOfPeople = amountOfPeople;
  }
}

