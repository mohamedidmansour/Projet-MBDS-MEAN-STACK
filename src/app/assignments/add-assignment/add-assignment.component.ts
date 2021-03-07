import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AssignmentsService } from 'src/app/shared/assignments.service';
import { Assignment } from '../assignment.model';
import {FormControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';

/**
 * @title Stepper that displays errors in the steps
 */
interface Pokemon {
  value: string;
  viewValue: string;
}

interface PokemonGroup {
  disabled?: boolean;
  name: string;
  pokemon: Pokemon[];
}


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

  ////////////////////////////////Po
  pokemonControl = new FormControl();
  /*pokemonGroups: PokemonGroup[] = [
    {
      name: 'IT Developpement',
      pokemon: [
        {value: 'Conception', viewValue: 'Conception&Dev'},
        {value: 'Cloud-IT', viewValue: 'Cloud IT'},
        {value: 'Compilation', viewValue: 'Compilation'},
        {value: 'Programmation', viewValue: 'Programmation C'},
        {value: 'Framework Angular', viewValue: ''},
      ]
    }
  ];*/
  pokemonGroups = [
    {libelle: 'Odoo', imgMat: 'https://www.syncoria.com/wp-content/uploads/2019/04/new-size_odoo.jpg', imgProf : 'https://images.pexels.com/photos/1006227/pexels-photo-1006227.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
    {libelle: 'Docker', imgMat: 'https://pbs.twimg.com/profile_images/1273307847103635465/lfVWBmiW_400x400.png', imgProf : 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
    {libelle: 'ReactJs', imgMat: 'data:image/jpeg;base64,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', imgProf : 'https://images.pexels.com/photos/3722186/pexels-photo-3722186.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
    {libelle: 'Grails', imgMat: 'https://i0.wp.com/d331tpl5vusgqa.cloudfront.net/wp-content/uploads/2015/02/Grails-logo.png?ssl=1', imgProf : 'https://images.pexels.com/photos/2128807/pexels-photo-2128807.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
    {libelle: 'Framework Angular', imgMat: 'data:image/png;base64,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', imgProf : 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
  ]
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
    newAssignment.matiere = this.secondFormGroup.value.matiere;
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
