import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParticipantesRoutingModule } from './participantes-routing.module';
import { ParticipantesComponent } from './participantes/participantes.component';
import { ParticipanteComponent } from './participantes/participante/participante.component';
import { ParticipanteFormComponent } from './participante-form/participante-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ParticipantesComponent, ParticipanteComponent, ParticipanteFormComponent],
  imports: [
    CommonModule,
    ParticipantesRoutingModule,
    FormsModule
  ]
})
export class ParticipantesModule { }
