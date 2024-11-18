import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  /* {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  }, */
  {
    path: 'listar-tareas',
    loadComponent: () => import('./pages/listar-tareas/listar-tareas.page').then( m => m.ListarTareasPage)
  },
  {
    path: 'agregar-tareas',
    loadComponent: () => import('./pages/agregar-tareas/agregar-tareas.page').then( m => m.AgregarTareasPage)
  },
  {
    path: 'editar-tareas',
    loadComponent: () => import('./pages/editar-tareas/editar-tareas.page').then( m => m.EditarTareasPage)
  },
  {
    path: 'detalle-tareas',
    loadComponent: () => import('./pages/detalle-tareas/detalle-tareas.page').then( m => m.DetalleTareasPage)
  },
  {
    path: '',
    loadComponent: () => import('./pages/index/index.page').then( m => m.IndexPage)
  },
  {
    path: 'index',
    loadComponent: () => import('./pages/index/index.page').then( m => m.IndexPage)
  },
];
