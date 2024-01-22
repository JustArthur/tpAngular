import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ListeTachesComponent } from '../liste-taches/liste-taches.component';

@Component({
  selector: 'app-formulaire',
  standalone: true,
  imports: [FormsModule, ListeTachesComponent],
  templateUrl: './formulaire.component.html',
  styleUrl: './formulaire.component.css'
})
export class FormulaireComponent {
  taches:any[] = [];

  newTache:any = {
      nomTache: "",
      accompli: false
  };

  addTache():void {
      this.taches.push(this.newTache);
      this.newTache = {};
  }
}
