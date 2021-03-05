import { Matiere } from "./matiere.model";
export class Assignment {
  _id?: string;
  id: number;
  nom: string;
  dateDeRendu: Date;
  rendu?: boolean;
  // new Attributs
  auteur: string;
  matiere:Matiere = new Matiere();
  note: number;
  remarques: string;
}
