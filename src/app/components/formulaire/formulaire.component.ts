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
    taches: any[] = [];

    newTache: any = {
        nomTache: "",
        accompli: false
    };

    addTache(): void {
        const newTask = { nomTache: this.newTache.nomTache, accompli: this.newTache.accompli || false };
        this.taches.push(newTask);
        this.newTache = { nomTache: "", accompli: false };
    }
}
