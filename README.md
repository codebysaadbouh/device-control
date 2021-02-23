# Tùti Angular

## Structure du component

```
import { component } from '@angular/core';
@Component({
  selector: 'le-selecteur',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css'] 
})
export class NameComponent implements OnInit {
    constructor(){}
    ngOnInit(): void {
      }
}
```

## Liaisons de données

### L'interpolation 
> L'interpolation consiste à emettre des données depuis le TS vers le template avec les {{ }}

### La liaison par propriété ou propery binding
> Permet de créer une comm. dynamique de notre code TS vers template avec les []

### Liaison par evenement ou event dinding
> Permet de créer une comm. depuis notre template vers le TS avec les ()
 
### Le two way binding
> Permet de communiquer dans les deux sens TS > T & T > TS
> Son utilisation implique l'utilisation du FormsModule (Il faudra l'importer) avec les [()]

### Propritété personnalisé
> Permet de passer des données depuis le component parent jusqu'aux components enfants
>```
>@Input() appareilName: string; 
>@Input() appareilStatus: string;
>```

## Les directives
>Les directives ce sont des intructions que nous mettons sur nos components ou sur des parties de notre document et qui sont lu par Angular.
>Angular va excecuter les instructions relatives aux directives.
>On a les **directives structuelles** et les **directives par attributs**.

### Les directives structurelles
Les directives s. permettent de structurer le document selon les conditions que nous choisisons
> Exemple 1 : *ngIf="appareilStatus ==='éteint'" (ngIf nous permet d'afficher conditionnelement un component)

> Exemple 2 : *ngFor nous permet d'afficher un component par objet d'une liste ou d'un arrêt dans le TS.

### Les directives par attribut
Les directives par attribut permettent de modifier le comportement des components qui sont déjà dans le document
> Exemple 1 : [ngStyle]
> Exemple 2 : [ngClass]

## Les pipes 
>Exemple : date pipe, uppercase, async...

## Les services
> C'est une façon de centraliser du code et des données pour pouvoir les utiliser dans diff. parties de l'application.
 
## Le routing
> L'un des principaux avantages de Angular est de créer des singles pages applications.
>Tout ceci s'applique avec le routing

## Les observables
> Un observable est un objet qui émet des informations dans le temps
> ça peut être un champ de texte dans lequel l'utilisateur va ... la progression du chargement d'un fichier.
> ça sera egalement toutes les communications HTTP que nous allons mettre en place
> A chaque observable on va associer un observeur
> C'est un blog de code qui sera excecuté à chaque fois que l'observable emettra une info
> L'observateur emet des informations ou une erreur ou un mes
> 




