import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstudiosComponent } from './estudios/estudios.component';
import { AsignaturaComponent } from './estudios/info/asignatura/asignatura.component';
import { InfoComponent } from './estudios/info/info.component';
import { GuiaComponent } from './guia/guia.component';

const routes: Routes = [
  {
    path: '',
    component: EstudiosComponent,
    children:[
      {
        path: 'info', component:InfoComponent
      },
      {
        path: 'info/:codAsignatura', component:AsignaturaComponent
      }
    ]
  },
  {
    path: 'guia',
    component: GuiaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstudiosRoutingModule { }
