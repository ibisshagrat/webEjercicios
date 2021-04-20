import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstudiosRoutingModule } from './estudios-routing.module';
import { EstudiosComponent } from './estudios/estudios.component';
import { InfoComponent } from './estudios/info/info.component';
import { GuiaComponent } from './guia/guia.component';
import { AsignaturaComponent } from './estudios/info/asignatura/asignatura.component';


@NgModule({
  declarations: [EstudiosComponent, InfoComponent, GuiaComponent, AsignaturaComponent],
  imports: [
    CommonModule,
    EstudiosRoutingModule
  ]
})
export class EstudiosModule { }
