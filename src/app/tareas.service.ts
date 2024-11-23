import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  private tareas: { nombre: string; descripcion: string}[] = [
    { nombre:'Revisar Plataforma EVA', descripcion:'Ingresar a la plataforma EVA y revisar las tareas pendientes'},
    { nombre:'Contestar Foro', descripcion:'Contestar foro correspondiente a la semana 2'},
    { nombre:'Revisar evaluacion', descripcion:'Revisar la pauta de evaluacion 1 de la asignatura'},
    { nombre:'Contactar compañeros', descripcion:'Contactar a los compañeros de grupo para coordinar la evaluacion'},
    { nombre:'Distribuir tareas', descripcion:'Designar tareas entre todos los compañeros para finalizar la evaluacion'},
    ];
    
  constructor() { }


  agregarTarea(tarea: { nombre: string; descripcion: string }) {
    this.tareas.push(tarea);
  }

  obtenerTareas() {
    return this.tareas;
  }

  eliminarTarea(index: number) {
    this.tareas.splice(index, 1);
  }
}
