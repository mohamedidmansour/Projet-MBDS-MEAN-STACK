import {Component, OnInit} from '@angular/core';
import {AuthService} from '../shared/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  username: string;
  password: string;


  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  onLogin(event: MouseEvent): void {
    event.preventDefault();
    console.log(this.username)
  }
}
