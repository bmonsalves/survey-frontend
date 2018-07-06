export class User {
  constructor (
    public email: string,
    public password: string,
    public name?: string,
    public lastname?: string,
    public _id?: number
  ) { }

  public fullname(): string {
    return `${this.name} ${this.lastname}`;
  }
}
