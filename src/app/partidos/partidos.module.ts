import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartidosRoutingModule } from './partidos-routing.module';
import { PartidosComponent } from './partidos/partidos.component';
import { FormsModule } from '@angular/forms';
import { PartidoComponent } from './partidos/partido/partido.component';
import { TarjetaComponent } from './partidos/tarjeta/tarjeta.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PartidosObtenerService } from './services/partidos-obtener.service';
import { PartidosService } from './services/partidos.service';
import { environment } from 'src/environments/environment';
import { PartidosEnvironmentService } from './services/partidos-environment.service';
import { PartidosApiService } from './services/partidos-api.service';

const factoriaObtenedor = (partidoService: PartidosService) => {
  if (environment.obtenedorPartidos == "environment") {
    return new PartidosEnvironmentService(partidoService);
  } else if (environment.obtenedorPartidos == "api") {
    return new PartidosApiService(partidoService);
  }
};
@NgModule({
  declarations: [PartidosComponent, PartidoComponent, TarjetaComponent],
  imports: [
    CommonModule,
    PartidosRoutingModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [
    {
      provide: PartidosObtenerService,
      useFactory: factoriaObtenedor,
      deps: [PartidosService]
    }
  ]
})
export class PartidosModule { }
