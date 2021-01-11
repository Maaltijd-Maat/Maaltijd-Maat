export interface IUser {
  readonly id?: string;
  readonly color?: string;
  firstname: string;
  lastname: string;
  email: string;
  secondEmail: string;
  password: string;
  avatar: string;
  guest: boolean;
  allergies: string[];
  diets: string[];
}

export class UserModel implements IUser{
  readonly id?: string;
  firstname: string;
  lastname: string;
  email: string;
  secondEmail: string;
  password: string;
  avatar: string;
  guest: boolean;
  allergies: string[];
  diets: string[];

  constructor(firstname: string, lastname: string, email: string, password: string, avatar: string, guest: boolean, secondEmail?: string, allergies?: string[],  diets?: string[], id?: string) {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.secondEmail = secondEmail || '';
    this.password = password;
    this.avatar = avatar;
    this.guest = guest;
    this.allergies = allergies || [];
    this.diets = diets || [];
  }
}
