import {Component, OnInit} from '@angular/core';
import {AuthService} from './auth/auth.service';
import {User} from './auth/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  currentUser?: User;
  constructor(private authService: AuthService) {}

  ngOnInit () {
    this.getCurrentUser();
  }

  getCurrentUser() {
    this.currentUser = this.authService.currentUser;
  }

  isLoggedIn () {
    this.getCurrentUser();
    return this.authService.isLoggedIn();
  }

  logout () {
    this.authService.logout();
  }
}
