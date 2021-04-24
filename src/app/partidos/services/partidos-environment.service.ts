import { Injectable } from '@angular/core';
import { ObtenedorPartidos } from '../models/obtenedor-partidos';
import { PartidosService } from './partidos.service';

@Injectable({
  providedIn: 'root'
})
export class PartidosEnvironmentService implements ObtenedorPartidos{

  constructor(private partidosService:PartidosService) { }

  getPartidos = this.partidosService.getPartidosEnvironment;
}
