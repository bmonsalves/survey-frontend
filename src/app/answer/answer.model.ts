import {Question} from '../question/question.model';

export class Answer {
  constructor (
    public description: string,
    public question: Question,
    public createdAt: Date,
    public user?: User
  ) { }
}

export class User {
  constructor (
    public name: string,
    public lastname: string
  ) { }
}
