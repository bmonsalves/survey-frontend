import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { MomentModule } from 'angular2-moment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import 'hammerjs';

// APP
import { AppComponent } from './app.component';
import { QuestionDetailComponent } from './questions/question/question-detail.component';
import { AnswerFormComponent } from './answer/answer-form.component';
import { SigninComponent } from './auth/signin.component';
import { SignupComponent } from './sign-up/signup.component';
import {QuestionListComponent} from './questions/question-list/question-list.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionListComponent,
    QuestionDetailComponent,
    AnswerFormComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    MomentModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
