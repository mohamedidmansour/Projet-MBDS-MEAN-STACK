import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AssignmentsService} from './shared/assignments.service';
import {AuthService} from './shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  titre = 'Application de gestion des Assignments';

  constructor(
    private assignmentsService: AssignmentsService
  ) {
    //this.assignmentsService.peuplerBase();

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
