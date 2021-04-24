import { Injectable } from '@angular/core';
import { ObtenedorPartidos } from '../models/obtenedor-partidos';
import { Partido } from '../models/partido';

@Injectable({
  providedIn: 'root'
})
export class PartidosObtenerService implements ObtenedorPartidos {

  constructor() { }

  getPartidos: () => Partido[];

}
