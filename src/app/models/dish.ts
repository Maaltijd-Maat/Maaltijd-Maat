import { User } from './user';
import { Ingredient } from './ingredient';

export class Dish {
  private _name: string;
  private _author: User;

  private _amountOfPeople: number;
  private _ingredients: Ingredient[];
  private _instructions: string;

  constructor(name: string, author: User,
              instructions: string, ingredients: Ingredient[], amountOfPeople: number) {
    this._name = name;
    this._author = author;

    this._instructions = instructions;
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

  get instructions(): string {
    return this._instructions;
  }

  set instructions(value: string) {
    this._instructions = value;
  }
}
