import {QuestionListComponent} from './question-list/question-list.component';
import {QuestionDetailComponent} from './question/question-detail.component';
import {QuestionFormComponent} from './question-form/question-form.component';

export const QuestionRoutes = [
  {path: '', component: QuestionListComponent, pathMatch: 'full' },
  {path: 'new', component: QuestionFormComponent},
  {path: ':id', component: QuestionDetailComponent}
];
