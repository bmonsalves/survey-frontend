import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { User } from './user.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {
  currentUser?: User;
  private apiURL: string;

  constructor(
    private http: HttpClient,
    private router: Router) {
    this.apiURL = `${environment.apiURL}auth/`;

    if (this.isLoggedIn()) {
      const { userId, email, name, lastname } = JSON.parse(localStorage.getItem('user'));
      this.currentUser = new User(email, null, name, lastname, userId);
    }
  }

  signin(user: User) {
    const body = JSON.stringify(user);
    const options = {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    };

    const url = `${this.apiURL}signin`;
    return this.http.post<any>(url, body, options)
      .pipe(
        map((response: Response) => {
          this.login(response);
          return response;
        }),
        catchError((err) => {
          return this.handleError(err);
        })
      );
  }

  login = (user) => {
    const { token, userId, name, lastname, email } = user;
    this.currentUser = new User(email, null, name, lastname, userId);

    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify({ userId, name, lastname, email }));
  }

  isLoggedIn() {
    return localStorage.getItem('token') !== null;
  }

  logout () {
    localStorage.clear();
    this.currentUser = null;
    this.router.navigateByUrl('/');
  }

  handleError(error: any) {
    const errMsg = error.message ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.log(errMsg);

    return error;
  }
}
