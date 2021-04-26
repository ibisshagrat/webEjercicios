import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PropietarioFormComponent } from './propietario-form/propietario-form.component';
import { PropietariosComponent } from './propietarios/propietarios.component';
import { PropietarioService } from './services/propietarios.service';

const routes: Routes = [
  {
    path: '',
    component: PropietariosComponent
  },
  {
    path: 'alta',
    component: PropietarioFormComponent
  },
  {
    path: 'editar/:id',
    component: PropietarioFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [PropietarioService]
})
export class PropietariosRoutingModule { }
