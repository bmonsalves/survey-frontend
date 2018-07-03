import {Component} from '@angular/core';
import {Question} from '../question/question.model';

const p1 = new Question(
  `pregunta numero 1`,
  `Descripcion de la pregunta 1`,
  new Date,
  `devicon-amazonwebservices-original colored`
);

const p2 = new Question(
  `pregunta numero 2`,
  `Descripcion de la pregunta 2`,
  new Date,
  `devicon-babel-plain colored`
);

const p3 = new Question(
  `pregunta numero 3`,
  `Descripcion de la pregunta 3`,
  new Date,
  `devicon-confluence-plain colored`
);

const p4 = new Question(
  `pregunta numero 4`,
  `Descripcion de la pregunta 4`,
  new Date
);

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent {
  questions: Question[] = [p1, p2, p3, p4];
}
