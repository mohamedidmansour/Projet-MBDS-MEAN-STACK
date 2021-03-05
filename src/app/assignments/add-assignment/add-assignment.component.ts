import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AssignmentsService } from 'src/app/shared/assignments.service';
import { Assignment } from '../assignment.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';

/**
 * @title Stepper that displays errors in the steps
 */

@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
  }]
})
export class AddAssignmentComponent implements OnInit {
  // pour le formulaire
  nomDevoir = '';
  dateDeRendu: Date = null;
  // forms
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private assignmentsService: AssignmentsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      nom: ['', Validators.required],
      dateDeRendu: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      matiere: ['', Validators.required],
      auteur: ['', Validators.required],
    });
    this.thirdFormGroup = this._formBuilder.group({
      note: ['', Validators.required],
      remarques: ['', Validators.required],
    });
   
  }

  onSubmit(event) {
    // evite la soumission standard du formulaire, qui génère un warning
    // dans la console...
    event.preventDefault();

    console.log(
      'Dans submit nom = ' + this.nomDevoir + ' date = ' + this.dateDeRendu
    );
    let newAssignment = new Assignment();
    newAssignment.id = Math.floor(Math.random() * 1000000);
    newAssignment.nom = this.firstFormGroup.value.nom;
    newAssignment.dateDeRendu = this.firstFormGroup.value.dateDeRendu;
    newAssignment.rendu = false;
    newAssignment.matiere.libelle = this.secondFormGroup.value.matiere;
    newAssignment.auteur = this.secondFormGroup.value.auteur;
    newAssignment.note = this.thirdFormGroup.value.note;
    newAssignment.remarques = this.thirdFormGroup.value.remarques;

    console.log(newAssignment);
    
    // on va utiliser directement le service
    this.assignmentsService
      .addAssignment(newAssignment)
      .subscribe((reponse) => {
        console.log(reponse.message);

        // il va falloir naviguer de nouveau vers la page d'accueil
        // on va devoir faire l'équivalent du routerLink="/home" mais
        // par programme...
        // on retourne à la page d'accueil
        this.router.navigate(['/home']);
      });
  }
}
