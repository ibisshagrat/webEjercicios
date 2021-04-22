import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartidosRoutingModule } from './partidos-routing.module';
import { PartidosComponent } from './partidos/partidos.component';
import { FormsModule } from '@angular/forms';
import { PartidoComponent } from './partidos/partido/partido.component';
import { TarjetaComponent } from './partidos/tarjeta/tarjeta.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [PartidosComponent, PartidoComponent, TarjetaComponent],
  imports: [
    CommonModule,
    PartidosRoutingModule,
    FormsModule,
    FontAwesomeModule
  ]
})
export class PartidosModule { }
