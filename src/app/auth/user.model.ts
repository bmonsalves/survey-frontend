export class User {
  constructor (
    public email: string,
    public password: string,
    public name?: string,
    public lastname?: string
  ) { }

  public fullname(): string {
    return `${this.name} ${this.lastname}`;
  }
}
