import {Answer} from '../../answer/answer.model';

export class Question {
  title: string;
  description: string;
  createdAt?: Date;
  icon?: string;
  answers?: Answer[];
  _id?: Number

  constructor (
    title: string,
    description: string,
    createdAt?: Date,
    icon?: string,
    _id?: Number
  ) {
    this.title = title;
    this.description = description;
    this.createdAt = createdAt;
    this.icon = icon;
    this.answers = [];
    this._id = 1;
  }
}
