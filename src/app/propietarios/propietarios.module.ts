import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropietariosRoutingModule } from './propietarios-routing.module';
import { PropietariosComponent } from './propietarios/propietarios.component';
import { PropietarioComponent } from './propietarios/propietario/propietario.component';
import { PropietarioFormComponent } from './propietario-form/propietario-form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [PropietariosComponent, PropietarioComponent, PropietarioFormComponent],
  imports: [
    CommonModule,
    PropietariosRoutingModule,
    FormsModule
  ]
})
export class PropietariosModule { }
