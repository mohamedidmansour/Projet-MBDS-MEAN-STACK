import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loggedIn = false;
  url = 'http://localhost:8010/api/login';

  constructor(private httpClient: HttpClient,
              private router: Router) {
  }

  logIn(username: string, password: string): void {
    this.httpClient.post<{ token: string }>(this.url, {username: username.toString(), password: password.toString()})
      .subscribe(res => {
        if (res.token !== undefined) {
          localStorage.setItem('token', res.token);
          this.loggedIn = true;
          this.router.navigate(['/home']);
        } else {
          this.loggedIn = false;
        }
      });
  }

  logOut(): void {
    localStorage.removeItem('token');
    this.loggedIn = false;
  }

  // cette méthode renvoie une promesse (on devra traiter le résultat avec un then...)
  // la valeur renvoyé (qu'on récupèrera dans le then(val => {....}) est la valeur
  // de la propriété loggedIn. En gros, si on est loggué, on est admin...
  isAdmin(): Promise<any> {
    const isUserAdmin = new Promise((resolve, reject) => {
      resolve(this.loggedIn);
    });

    return isUserAdmin;
  }
}
