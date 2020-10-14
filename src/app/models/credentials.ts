export interface ICredentials {
  email: string;
  password: string;
}

export class Credentials implements ICredentials{
  email: string;
  password: string;


  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }
}
