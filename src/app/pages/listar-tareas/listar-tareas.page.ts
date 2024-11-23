import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonList, IonItem , IonLabel, IonButton, IonIcon, IonImg   } from '@ionic/angular/standalone';
import { Router } from '@angular/router'; 
import { TareasService } from '../../services/tareas.service';
import {addIcons} from 'ionicons';
import {closeCircleOutline} from 'ionicons/icons';

@Component({
  selector: 'app-listar-tareas',
  templateUrl: './listar-tareas.page.html',
  styleUrls: ['./listar-tareas.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonList, IonItem , IonLabel, IonButton, IonIcon, IonImg ]
})
export class ListarTareasPage implements OnInit {

  tareas: { nombre: string; descripcion: string; address: string | null; photo: string | null }[] = [];

  constructor(private router:Router, private tareasService: TareasService) { 

    addIcons({ closeCircleOutline });

  }
  
  ngOnInit() {
    this.tareas = this.tareasService.obtenerTareas();
  }

  eliminarTarea(index:number){
    this.tareas.splice(index,1)
  }

  goToIndex(){
    this.router.navigate(['/index'])
  }
}
