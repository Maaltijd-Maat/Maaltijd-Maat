import { Ingredient } from './ingredient';
import { User } from './user';

export interface IDish {
  readonly id?: string;
  name: string;
  author: User;
  ingredients: Ingredient[];
  instructions: string[];
}

export class Dish implements IDish {
  readonly id?: string;

  name: string;
  author: User;

  amountOfPeople: number;
  ingredients: Ingredient[];
  instructions: string[];

  constructor(name: string, author: User,
              instructions: string[], ingredients: Ingredient[], amountOfPeople: number) {
    this.name = name;
    this.author = author;

    this.instructions = instructions;
    this.ingredients = ingredients;
    this.amountOfPeople = amountOfPeople;
  }
}

