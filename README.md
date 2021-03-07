# Sujet du mini projet : améliorer le TP sur les Assignments
Dans ce mini projet on a utilisé le "MEAN STACK" dans le cloud, c'est-à-dire MongoDB + Express + Angular + NodeJS.

# Les tâches réalisées!!
<li>L'authentification à l'aide de Json Web Tokens (JWT)</li>
<li>Gestion des Assignments (affichage/saisir/mis à jour.......)</li>
<li>L' ajout de nouvelles propriétés au modèle des Assignments

-   Auteur (nom de l'élève)
-   Matière (Base de données, Technologies Web, Grails, etc.) 
-   Une image sera associée à chaque matière et une photo du prof.
-   Note sur 20, on ne peut marquer "rendu" un Assignment qui n'a pas été noté.
-   Remarques.
</li>
<li>L' amélioration de l'affichage des Assignments (Material Card.......)</li>
<li>L' affichage des Assignments dans deux onglets séparés selon qu'ils ont été rendus ou pas encore rendus</li>
<li>utilisation des Formulaires de type **Stepper** pour l'ajout d'Assignments</li>

<li>Intégrer le framework [Bootstrap](https://getbootstrap.com/)</li>
<li>L' ajout de Cadre cartographie en utilisant : [ngx-charts](https://swimlane.gitbook.io/ngx-charts/).</li>
<li>l'hébergement sur Heroku.com</li>

-------------
```mixed
## Installation
***
Suivi les étapes suivants pour utilisé l'application: 
```
$ git clone https://github.com/mohamedidmansour/Projet-MBDS-MEAN-STACK
$ cd ../path/to/the/file
$ npm install
$ npm start
```
Note: pour utiliser l'application hébergée sur Heroku. utiliser le lien: https://app-assignment-front.herokuapp.com/
```
# les pages de l'application

#### Page Authentification : 
-	**lien en local** : http://localhost:4200/
-	**Heroku**		 : https://app-assignment-front.herokuapp.com/
#### Page d'Accueil qui affiche la liste des Assignments avec Pagination:
-	**lien en local** : http://localhost:4200/home
-	**Heroku**		 : https://app-assignment-front.herokuapp.com/home
####  Pour ajouter un Assignment:
-	**lien en local** : http://localhost:4200/home
-	**Heroku**		 : https://app-assignment-front.herokuapp.com/add
####  Pour afficher le détail d'un Assignment:
-	**lien en local** : http://localhost:4200/assignment/{id_assignment}
-	**Heroku**		 : https://app-assignment-front.herokuapp.com/assignment/{id_assignment}
####  Pour modifier un Assignment:
-	**lien en local** : http://localhost:4200/assignment/{id_assignment}/edit
-	**Heroku**		 : https://app-assignment-front.herokuapp.com/assignment/{id_assignment}/edit

####  Pour afficher Chart (ngx-charts)
-	**lien en local** : http://localhost:4200/chart
-	**Heroku**		 : https://app-assignment-front.herokuapp.com/chart


# Les Captures d'écran de l'application

<p>
<img src="https://drive.google.com/file/d/1SCVlFTLqxygx00-GptEQSMuwha8onCW1/view" width="350" alt="img not found, check your network connection"/>
  <img src="https://drive.google.com/file/d/1SCVlFTLqxygx00-GptEQSMuwha8onCW1/view" width="350" alt="img not found, check your network connection"/>
</p>

