import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PropietariosComponent } from './propietarios/propietarios.component';
import { PropietarioService } from './services/propietarios.service';

const routes: Routes = [
  {
    path: '',
    component: PropietariosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [PropietarioService]
})
export class PropietariosRoutingModule { }
