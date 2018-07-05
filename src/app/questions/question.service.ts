import {Injectable} from '@angular/core';
import {Question} from './question/question.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {Answer} from '../answer/answer.model';


// import * as urlJoin from 'url-join';

@Injectable()
export class QuestionService {

  private apiURL: string;

  constructor(
    private http: HttpClient
  ) {
    this.apiURL = `${environment.apiURL}questions/`;
  }

  getQuestions(): Promise< void | Question[] > {
    return this.http.get(this.apiURL)
                    .toPromise()
                    .then(response => response as Question[])
                    .catch(this.handleError);
  }

  getQuestion(id): Promise<void | Question> {
    return this.http.get(`${this.apiURL}${id}`)
      .toPromise()
      .then(response => response as Question)
      .catch(this.handleError);
  }

  addQuestion (question: Question): Observable<Question> {

    const body = JSON.stringify(question);
    const options = {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    };

    return this.http.post<Question>(this.apiURL, body, options)
      .pipe(
        map((response: Response) => response),
        catchError((err) => {
          return this.handleError(err);
        })
      );
  }

  addAnswer (answer: Answer): Observable<Answer> {

    const bodyAnswer = {
      description: answer.description,
      question: {
        _id: answer.question._id
      }
    };

    const body = JSON.stringify(bodyAnswer);
    const options = {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    };

    const url = `${this.apiURL}${answer.question._id}/answers`;
    return this.http.post<Answer>(url, body, options)
      .pipe(
        map((response: Response) => response),
        catchError((err) => {
          return this.handleError(err);
        })
      );
  }

  handleError(error: any) {
    const errMsg = error.message ? error.message :
                   error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.log(errMsg);

    return error;
  }
}
