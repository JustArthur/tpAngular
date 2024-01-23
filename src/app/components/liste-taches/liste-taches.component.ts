import { NgFor, NgIf } from '@angular/common';
import { Component, Input, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-liste-taches',
    standalone: true,
    imports: [FormsModule, NgFor, NgIf],
    templateUrl: './liste-taches.component.html',
    styleUrl: './liste-taches.component.css'
})

export class ListeTachesComponent implements OnInit{
    @Input() recupTaches!: any[];
    filteredTasks: any[] = [];
    filtreTaches: string = "all";

    ngOnInit(): void {
        this.onChangeFiltre();
    }

    changeValueTache(index: number): void {
        this.recupTaches[index].accompli = !this.recupTaches[index].accompli;
    }

    deleteTache(index: number): void {
        const originalIndex = this.recupTaches.indexOf(this.filteredTasks[index]);
        this.recupTaches.splice(originalIndex, 1);
        this.onChangeFiltre();
    }

    onChangeFiltre(): void {
        if (this.filtreTaches === "accomplies") {
            this.filteredTasks = this.recupTaches.filter(tache => tache.accompli);
        } else if (this.filtreTaches === "nonAccomplies") {
            this.filteredTasks = this.recupTaches.filter(tache => !tache.accompli);
        } else {
            this.filteredTasks = this.recupTaches.slice();
        }
    }

    toggleEditMode(index: number): void {
        this.filteredTasks[index].editMode = !this.filteredTasks[index].editMode;
    }
    
    onSubmit(index: number): void {
        this.toggleEditMode(index);
    }
}
