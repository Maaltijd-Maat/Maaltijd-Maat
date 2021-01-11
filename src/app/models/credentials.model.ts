export interface ICredentials {
  email: string;
  password: string;
}

export class CredentialsModel implements ICredentials{
  email: string;
  password: string;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }
}
