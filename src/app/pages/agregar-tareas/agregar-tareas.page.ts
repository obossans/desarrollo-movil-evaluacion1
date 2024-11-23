import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonButton, IonIcon, IonGrid, IonCol, IonRow, IonText, IonCard, IonCardContent, IonCardTitle, IonCardHeader, IonImg, IonThumbnail  } from '@ionic/angular/standalone';
import { Router } from '@angular/router'; 
import { TareasService } from '../../services/tareas.service';
import {addIcons} from 'ionicons';
import {addCircleOutline} from 'ionicons/icons';
import {TakePhotoService} from '../../services/take-photo.service'

@Component({
  selector: 'app-agregar-tareas',
  templateUrl: './agregar-tareas.page.html',
  styleUrls: ['./agregar-tareas.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonInput, IonButton, IonIcon, IonGrid, IonCol, IonRow, IonText, IonCard, IonCardContent, IonCardTitle, IonCardHeader, IonImg, IonThumbnail ]
})
export class AgregarTareasPage implements OnInit {

  photo:string|null = null;
  location:{latitude:number, longitude:number}|null = null
  address: string | null = null;

  nombreTarea = '';
  descripcionTarea = '';

  constructor(private router:Router, private tareasService: TareasService, private TakePhotoService: TakePhotoService) { 

    addIcons({ addCircleOutline });

  }

  ngOnInit() {
  }

async capturePhoto(){
  const result = await this.TakePhotoService.takePhoto();
  console.log('Foto', result)
  if(result){
    this.photo =result.photo;
  }
}

async captureAddress(){
  const result = await this.TakePhotoService.takeAddress();
  console.log('Ubicacion', result)
  if(result){
    this.location=result.location;
    this.address=result.address;
  }
}

  agregarTarea() {
    if (this.nombreTarea && this.descripcionTarea) {
      this.tareasService.agregarTarea({
        nombre: this.nombreTarea,
        descripcion: this.descripcionTarea,
        address: this.address,
        photo: this.photo
      });
      this.nombreTarea = '';
      this.descripcionTarea = '';
    }
  }

  goToIndex(){
    this.router.navigate(['/index'])
  }

}

