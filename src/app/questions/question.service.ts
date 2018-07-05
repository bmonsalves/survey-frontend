import {Injectable} from '@angular/core';
import {Question} from './question/question.model';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
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

  handleError(error: any) {
    const errMsg = error.message ? error.message :
                   error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.log(errMsg);
  }
}
