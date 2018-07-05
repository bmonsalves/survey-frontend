import {Component, Input} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Answer} from './answer.model';
import { Question } from '../questions/question/question.model';
import {User} from '../auth/user.model';
import {QuestionService} from '../questions/question.service';

@Component({
  selector: 'app-answer-form',
  templateUrl: './answer-form.component.html',
  styleUrls: ['./answer-form.component.css'],
  providers: [QuestionService]
})
export class AnswerFormComponent {
  @Input() question: Question;

  constructor(
    private questionService: QuestionService,
  ) { }

  onSubmit(form: NgForm) {
    const answer = new Answer(
      form.value.description,
      this.question
    );

    this.questionService.addAnswer(answer)
      .subscribe(
        (response) => this.question.answers.unshift(response),
        error => console.log(error)
      );

    form.reset();
  }
}
