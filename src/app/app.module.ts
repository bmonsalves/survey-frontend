import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { MomentModule } from 'angular2-moment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import 'hammerjs';
import {Routing} from './app.routing';
import {HttpClientModule} from '@angular/common/http';


// APP
import { AppComponent } from './app.component';
import { QuestionDetailComponent } from './questions/question/question-detail.component';
import { AnswerFormComponent } from './answer/answer-form.component';
import { SigninComponent } from './auth/sing-in/signin.component';
import { SignupComponent } from './auth/sign-up/signup.component';
import {QuestionListComponent} from './questions/question-list/question-list.component';
import {QuestionFormComponent} from './questions/question-form/question-form.component';
import {NgHttpLoaderModule} from 'ng-http-loader';
import {AuthService} from './auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    QuestionListComponent,
    QuestionDetailComponent,
    QuestionFormComponent,
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
    ReactiveFormsModule,
    Routing,
    HttpClientModule,
    NgHttpLoaderModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
