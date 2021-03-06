import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { filter, map, pairwise, tap, throttleTime } from 'rxjs/operators';
import { AssignmentsService } from '../shared/assignments.service';
import { Assignment } from './assignment.model';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css'],
})
export class AssignmentsComponent implements OnInit {
  titre = 'Mon application sur les Assignments 2 !';
  assignments: Assignment[] = [];
  assignmentSelectionne: Assignment;
  index:number;


  showFiller = false;
  // Pour la pagination
  page: Number;
  nextPage: Number = 1;
  limit: Number = 10;
  countAssignments: Number;

  @ViewChild('scroller') scroller: CdkVirtualScrollViewport;

  constructor(
    private assignmentsService: AssignmentsService,
    private ngZone: NgZone,
    private authService: AuthService,
    private router: Router
  ) {}


  ngOnInit(): void {
    /*
    this.assignmentsService.getAssignments().subscribe((assignments) => {
      // exécuté que quand les données sont réellement disponible
      this.assignments = assignments;
    });
*/
    this.index=0;
    this.getAssignments();
  }

  // avec pagination...
  getAssignments() {
    if (!this.nextPage) return;
    this.assignmentsService
      .getAssignmentsPagine(this.nextPage, this.limit,this.index)
      .subscribe((data: any) => {
        this.page = data.page;
        this.nextPage = data.nextPage;
        this.countAssignments = data.totalDocs;
        this.assignments = this.assignments.concat(data.docs);
        console.log(this.assignments)
      });
  }

  login() {
    // if (!this.authService.loggedIn) {
    //   this.authService.logIn();
    // } else {
    //   this.authService.logOut();
    //   this.router.navigate(['/home']);
    // }
  }

  ngAfterViewInit() {
    console.log('After view init');
    this.scroller
      .elementScrolled()
      .pipe(
        // on transforme les evenements en distances par rapport au bas du scroll
        map((e) => {
          return this.scroller.measureScrollOffset('bottom');
        }),
        tap((val) => {
          //console.log(val);
        }),
        pairwise(),
        filter(([y1, y2]) => {
          return y2 < y1 && y2 < 140;
        }),
        throttleTime(200) // on n'enverra un subscribe que toutes les 200ms (on ignorera les evenements entre...)
      )
      .subscribe((_) => {
        console.log(
          "...Dans subscribe du scroller, je charge plus d'assignments"
        );
        this.ngZone.run(() => {
          //this.addMoreAssignments();
          this.getAssignments(); // déjà prêt car nextPage re-initialisé à chaque requête
        });
      });
  }

  assignmentClique(a: Assignment) {
    console.log('Assignment cliqué : ' + a.nom);
    this.assignmentSelectionne = a;
  }

  onNouvelAssignment(newAssignment: Assignment) {
    //this.assignments.push(newAssignment);
    this.assignmentsService
      .addAssignment(newAssignment)
      .subscribe((message) => {
        // on ne rentre ici que quand l'ajout (insert) a bien été
        // effectué !
        console.log(message);
      });
  }

  filter(index:number)
  {

  }
}
