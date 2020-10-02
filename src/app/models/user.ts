export interface IUser {
  readonly UUID?: number;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  avatar: string;
  guest: boolean;
  allergenen: string[];
}

export class User implements IUser{
  readonly UUID?: number;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  avatar: string;
  guest: boolean;
  allergenen: string[];

  constructor(firstname: string, lastname: string, email: string, password: string, avatar: string, guest: boolean, allergenen?: string[]) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.password = password;
    this.avatar = avatar;
    this.guest = guest;
    this.allergenen = allergenen || [];
  }
}
