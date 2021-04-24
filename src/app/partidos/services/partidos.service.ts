import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ObtenedorPartidos } from '../models/obtenedor-partidos';
import { Partido } from '../models/partido';

@Injectable({
  providedIn: 'root'
})
export class PartidosService {

  constructor() { }

  public getPartidosEnvironment(): Partido[] {
    return environment.partidos;
  }
}
