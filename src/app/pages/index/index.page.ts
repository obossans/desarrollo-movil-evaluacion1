import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; 
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonIcon, IonGrid, IonCol, IonRow, IonList, IonListHeader, IonLabel, IonItem } from '@ionic/angular/standalone';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonIcon, IonGrid, IonCol, IonRow, IonList, IonListHeader, IonLabel, IonItem ]
})
export class IndexPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  goToListar(){
    this.router.navigate(['/listar-tareas'])
  }

  goToAgregar(){
    this.router.navigate(['/agregar-tareas'])
  }

  goToIndex(){
    this.router.navigate(['/index'])
  }

}
