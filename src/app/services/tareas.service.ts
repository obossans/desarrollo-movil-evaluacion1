import { Injectable } from '@angular/core';
import {TakePhotoService} from './take-photo.service'


@Injectable({
  providedIn: 'root'
})
export class TareasService {

  private tareas: { nombre: string; descripcion: string; address: string | null; photo: string|null}[] = [
    { nombre:'Revisar Plataforma EVA', descripcion:'Ingresar a la plataforma EVA y revisar las tareas pendientes',address:'',photo:''},
    { nombre:'Contestar Foro', descripcion:'Contestar foro correspondiente a la semana 2',address:'',photo:''},
    { nombre:'Revisar evaluacion', descripcion:'Revisar la pauta de evaluacion 1 de la asignatura',address:'',photo:''},
    ];
    
  constructor() { }


  agregarTarea(tarea: { nombre: string; descripcion: string ; address:string | null ; photo:string | null}) {
    this.tareas.push(tarea);
  }

  obtenerTareas() {
    return this.tareas;
  }

  eliminarTarea(index: number) {
    this.tareas.splice(index, 1);
  }
}
