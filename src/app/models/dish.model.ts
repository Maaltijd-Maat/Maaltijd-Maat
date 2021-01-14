import { IUser } from '@models:/user.model';

export interface IDish {
  readonly id?: string;
  readonly author?: IUser;

  name: string;
  amountOfPeople: number;
}

export class DishModel implements IDish{
  readonly id: string;
  amountOfPeople: number;
  name: string;

  constructor(id: string, name: string, amountOfPeople: number) {
    this.id = id;
    this.amountOfPeople = amountOfPeople;
    this.name = name;
  }
}

