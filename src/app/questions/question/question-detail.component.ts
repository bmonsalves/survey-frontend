import {Component, OnDestroy, OnInit} from '@angular/core';
import {Question} from './question.model';
import {QuestionService} from '../question.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css'],
  providers: [QuestionService]
})
export class QuestionDetailComponent implements OnInit, OnDestroy {
  question?: Question;
  id: number;
  constructor(
    private questionService: QuestionService,
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.params.id;
  }

  ngOnInit() {
    this.questionService
      .getQuestion(this.id)
      .then((question: Question) => {
        console.log(`saddsadsaadsads ${question}`);
        this.question = question;
      });

  }

  ngOnDestroy() {
    console.log(`destroy`);
  }
}
