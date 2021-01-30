import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AssignmentsService } from './shared/assignments.service';
import { AuthService } from './shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  titre = 'Application de gestion des Assignments';

  constructor(
    private authService: AuthService,
    private router: Router,
    private assignmentsService: AssignmentsService
  ) {}

  login() {
    if (!this.authService.loggedIn) {
      this.authService.logIn();
    } else {
      this.authService.logOut();
      this.router.navigate(['/home']);
    }
  }

  peuplerLaBase() {
    // on appelle une méthode dans le service assignments
    this.assignmentsService.peuplerBase();

    /*
    // ici si on ne veut qu'une seule notification quand c'est fini
    this.assignmentsService.peuplerBDJoin()
      .subscribe(() => {
        console.log("Toute la BD a été peuplée");
      });
      */
  }
}
