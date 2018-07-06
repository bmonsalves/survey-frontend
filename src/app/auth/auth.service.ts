import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { User } from './user.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';

@Injectable()
export class AuthService {
  currentUser?: User;
  private apiURL: string;

  constructor(
    private http: HttpClient,
    private router: Router,
    public snackBar: MatSnackBar) {
    this.apiURL = `${environment.apiURL}auth/`;

    if (this.isLoggedIn()) {
      const { userId, email, name, lastname } = JSON.parse(localStorage.getItem('user'));
      this.currentUser = new User(email, null, name, lastname, userId);
    }
  }

  signup(user: User) {
    const body = JSON.stringify(user);
    const options = {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    };

    const url = `${this.apiURL}signup`;
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
    console.log(`${error.status} - ${error.statusText}`, errMsg);

    return error;
  }

  showSnackBar(message) {
    this.snackBar.open(message, 'x', { duration: 2500 });
  }

  public showError = (error: any) => {
    console.log(error);
    const { error: { name }, message } = error;
    if (name === 'TokenExpiredError') {
      this.showSnackBar('Tu sesión ha expirado');
    } else if (name === 'JsonWebTokenError') {
      this.showSnackBar('Ha habido un problema con tu sesión');
    } else {
      this.showSnackBar(message || 'Ha ocurrido un error. Inténtalo nuevamente');
    }
    this.logout();

  }
}
