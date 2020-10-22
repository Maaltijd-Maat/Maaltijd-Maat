import { IIngredient } from '@models:/ingredient';
import { IUser } from '@models:/user';

export interface IDish {
  readonly id?: string;
  readonly author: IUser;

  name: string;
  amountOfPeople: number;
  ingredients: IIngredient[];
  instructions: string[];
}

export class Dish implements IDish {
  readonly id?: string;
  readonly author: IUser;

  name: string;
  amountOfPeople: number;
  ingredients: IIngredient[];
  instructions: string[];

  constructor(name: string, author: IUser,
              instructions: string[], ingredients: IIngredient[], amountOfPeople: number) {
    this.name = name;
    this.author = author;

    this.instructions = instructions;
    this.ingredients = ingredients;
    this.amountOfPeople = amountOfPeople;
  }
}

