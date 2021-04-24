import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Partido } from '../models/partido';
import { PartidoImpl } from '../models/partido-impl';
import { Suceso } from '../models/suceso';

@Injectable({
  providedIn: 'root'
})
export class PartidosService {


  objeto: any;

  constructor(private http: HttpClient) { }

  public getPartidosEnvironment(): Partido[] {
    return environment.partidos;
  }

  public getPartidosApi(): Partido[] {
    return null;
  }
}
