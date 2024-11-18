import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonButton, IonIcon, IonGrid, IonCol, IonRow  } from '@ionic/angular/standalone';
import { Router } from '@angular/router'; 
import { TareasService } from '../../tareas.service';
import {addIcons} from 'ionicons';
import {addCircleOutline} from 'ionicons/icons';

@Component({
  selector: 'app-agregar-tareas',
  templateUrl: './agregar-tareas.page.html',
  styleUrls: ['./agregar-tareas.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonInput, IonButton, IonIcon, IonGrid, IonCol, IonRow ]
})
export class AgregarTareasPage implements OnInit {

  nombreTarea = '';
  descripcionTarea = '';

  constructor(private router:Router, private tareasService: TareasService) { 

    addIcons({ addCircleOutline });

  }

  ngOnInit() {
  }

  agregarTarea() {
    if (this.nombreTarea && this.descripcionTarea) {
      this.tareasService.agregarTarea({
        nombre: this.nombreTarea,
        descripcion: this.descripcionTarea,
      });
      this.nombreTarea = '';
      this.descripcionTarea = '';
    }
  }

  goToIndex(){
    this.router.navigate(['/index'])
  }

}

