import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loggedIn = false;

  constructor() {}

  logIn() {
    this.loggedIn = true;
  }

  logOut() {
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
