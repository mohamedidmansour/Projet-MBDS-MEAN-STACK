import {Component, OnInit} from '@angular/core';
import {AuthService} from '../shared/auth.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  username: string;
  password: string;


  constructor(private authService: AuthService,
              private router: Router) {

  }

  ngOnInit(): void {
  }

  // click to login button
  onLogin(event: MouseEvent): void {
    event.preventDefault();
    if (!this.authService.loggedIn) {
      this.authService.logIn(this.username, this.password);
    } else {
      this.authService.logOut();
      this.router.navigate(['/home']);
    }
  }
}
