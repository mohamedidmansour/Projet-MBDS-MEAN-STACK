import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AssignmentsService } from 'src/app/shared/assignments.service';
import { Assignment } from '../assignment.model';
import {FormControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
@Component({
  selector: 'app-edit-assigment',
  templateUrl: './edit-assigment.component.html',
  styleUrls: ['./edit-assigment.component.css'],
})
export class EditAssigmentComponent implements OnInit {
  // pour le formulaire
  nomDevoir = '';
  dateDeRendu: Date = null;
  selected: String;
  // forms
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  newAssignment = new Assignment();
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
    {libelle: 'Conception', imgMat: 'https://material.angular.io/assets/img/examples/shiba2.jpg', imgProf : 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
    {libelle: 'Cloud-IT', imgMat: 'https://material.angular.io/assets/img/examples/shiba2.jpg', imgProf : 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
    {libelle: 'Compilation', imgMat: 'https://material.angular.io/assets/img/examples/shiba2.jpg', imgProf : 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
    {libelle: 'Programmation', imgMat: 'https://material.angular.io/assets/img/examples/shiba2.jpg', imgProf : 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
    {libelle: 'Framework Angular', imgMat: 'https://material.angular.io/assets/img/examples/shiba2.jpg', imgProf : 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
  ]
  constructor(
    
    private route: ActivatedRoute,
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

    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);

    this.getAssignment();
   
  }

  getAssignment() {
    // 1 récupérer l'id de l'assignment dans l'URL
    let id: number = +this.route.snapshot.params.id;
    console.log('COMPOSANT EDIT ID = ' + id);

    this.assignmentsService.getAssignment(id).subscribe((assignment) => {
      //console.log(assignment);
      if (assignment) {
        alert(assignment.nom);
        this.newAssignment= assignment
        this.firstFormGroup.patchValue({nom:assignment.nom});
        this.firstFormGroup.patchValue({dateDeRendu:assignment.dateDeRendu});
        this.secondFormGroup.patchValue({matiere:assignment.matiere});
        this.secondFormGroup.patchValue({auteur:assignment.auteur});
        this.thirdFormGroup.patchValue({note:assignment.note});
        this.thirdFormGroup.patchValue({remarques:assignment.remarques});
        this.selected = assignment.matiere.libelle;
        //this.dateDeRendu = assignment.dateDeRendu;
      }
    });
  }

  onSubmit($event) {
    
    this.newAssignment.nom = this.firstFormGroup.value.nom;
    this.newAssignment.dateDeRendu = this.firstFormGroup.value.dateDeRendu;
    this.newAssignment.rendu = false;
    this.newAssignment.matiere = this.secondFormGroup.value.matiere;
    this.newAssignment.auteur = this.secondFormGroup.value.auteur;
    this.newAssignment.note = this.thirdFormGroup.value.note;
    this.newAssignment.remarques = this.thirdFormGroup.value.remarques;
    this.assignmentsService
      .updateAssignment(this.newAssignment)
      .subscribe((reponse) => {
        console.log(reponse.message);
        // on navigue vers la page d'accueil
        this.router.navigate(['/home']);
      });
  }
}
