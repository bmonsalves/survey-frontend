import {Routes, RouterModule} from '@angular/router';
import {QuestionListComponent} from './questions/question-list/question-list.component';
import {SigninComponent} from './auth/sing-in/signin.component';
import {SignupComponent} from './auth/sign-up/signup.component';
import {QuestionRoutes} from './questions/question.routing';

const AppRoutes: Routes = [
  {path: '', component: QuestionListComponent, pathMatch: 'full' },
  {path: 'signin', component: SigninComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'questions', children: QuestionRoutes}
];

export const Routing = RouterModule.forRoot(AppRoutes);
