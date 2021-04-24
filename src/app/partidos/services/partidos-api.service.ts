import { Injectable } from '@angular/core';
import { ObtenedorPartidos } from '../models/obtenedor-partidos';
import { Partido } from '../models/partido';
import { PartidosService } from './partidos.service';

@Injectable({
  providedIn: 'root'
})
export class PartidosApiService implements ObtenedorPartidos {

  constructor(private partidosService:PartidosService) { }

  getPartidos = this.partidosService.getPartidosApi;

}
