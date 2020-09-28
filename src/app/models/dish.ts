import { User } from './user';
import { Ingredient } from './ingredient';

export class Dish {
  private _author: User;
  private _name: string;

  private _amountOfPeople: number;
  private _ingredients: Ingredient[];
  private _steps: string;

  constructor(name: string, author: User,
              steps: string, ingredients: Ingredient[], amountOfPeople: number) {
    this._name = name;
    this._author = author;

    this._steps = steps;
    this._ingredients = ingredients;
    this._amountOfPeople = amountOfPeople;
  }

  get author(): User {
    return this._author;
  }

  set author(value: User) {
    this._author = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get amountOfPeople(): number {
    return this._amountOfPeople;
  }

  set amountOfPeople(value: number) {
    this._amountOfPeople = value;
  }

  get ingredients(): Ingredient[] {
    return this._ingredients;
  }

  set ingredients(value: Ingredient[]) {
    this._ingredients = value;
  }

  get steps(): string {
    return this._steps;
  }

  set steps(value: string) {
    this._steps = value;
  }
}
