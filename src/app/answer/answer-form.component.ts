import {Component, Input} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Answer} from './answer.model';
import { Question } from '../questions/question/question.model';
import {QuestionService} from '../questions/question.service';
import {AuthService} from '../auth/auth.service';
import {Router} from '@angular/router';

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
    private authService: AuthService,
    private router: Router,
  ) { }

  onSubmit(form: NgForm) {

    const answer = new Answer(
      form.value.description,
      this.question
    );

    this.questionService.addAnswer(answer)
      .subscribe(
        (response) => this.question.answers.unshift(response),
        error => this.authService.showError(error)
      );

    form.reset();
  }
}
