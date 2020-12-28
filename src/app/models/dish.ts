import { IIngredient } from '@models:/ingredient';
import { IUser } from '@models:/user';

export interface IDish {
  readonly id?: string;
  readonly author?: IUser;

  name: string;
  amountOfPeople: number;
  ingredients: IIngredient[];
  instructions: string[];
}

export class Dish implements IDish{
  readonly id: string;
  amountOfPeople: number;
  ingredients: IIngredient[];
  instructions: string[];
  name: string;

  constructor(id: string, amountOfPeople: number, ingredients: IIngredient[], instructions: string[], name: string) {
    this.id = id;
    this.amountOfPeople = amountOfPeople;
    this.ingredients = ingredients;
    this.instructions = instructions;
    this.name = name;
  }
}

