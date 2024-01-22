import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-liste-taches',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './liste-taches.component.html',
  styleUrl: './liste-taches.component.css'
})
export class ListeTachesComponent{

  @Input()
  recupTaches!:any;

  changeValueTache(index:number):void {
    this.recupTaches[index].accompli = !this.recupTaches[index].accompli;
    console.log(this.recupTaches)
  }

  deleteTache(index:number):void {
    this.recupTaches.splice(index, 1);
  }
}
