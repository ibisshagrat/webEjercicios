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
export class PartidosApiNoInversoService {

  urlDatosDeportivosPartidos: string = `${environment.hostDatosDeportivos}/partidos`

  constructor(private http: HttpClient) { }

  getPartidos(): Observable<any>{
    return this.http.get<any>(this.urlDatosDeportivosPartidos);
  }

  extraerPartidos(respuestaApi: any): Partido[] {
    const partidos: Partido[] = [];
    respuestaApi._embedded.partidos.forEach(p => {
        const pMapeado = this.extraerPartido(p);
        partidos.push(pMapeado);
      });
    return partidos;
  }

  extraerPartido(partidoDesdeAPI): Partido {
    const pe = this.mapearPartido(partidoDesdeAPI);
    const url = partidoDesdeAPI._links.self.href;
    pe.id = url.slice(url.lastIndexOf('/') + 1, url.length);
    const sucesos: Suceso[] = [];
    this.http.get<any>(`${this.urlDatosDeportivosPartidos}/${pe.id}/sucesos`)
      .subscribe(r => {
        let arraySucesos = r._embedded.goles;
        if (arraySucesos) {
          sucesos.push(...this.mapearSucesos(arraySucesos));
        }
        arraySucesos = r._embedded.tarjetas;
        if (arraySucesos) {
          sucesos.push(...this.mapearSucesos(arraySucesos));
        }
      });
    pe.sucesos = sucesos;

    return pe;
  }

  mapearPartido(partidoApi): Partido {
    const partido = new PartidoImpl();
    partido.idLocal = partidoApi.idLocal;
    partido.idVisitante = partidoApi.idVisitante;
    partido.timeStamp = partidoApi.timeStamp;
    partido.sucesos = partidoApi.sucesos;

    return partido;
  }

  mapearSuceso(sucesoAPI): Suceso {
    let suceso = null;
    if (sucesoAPI.tipoTarjeta) {
      suceso = {
        class: 'Tarjeta',
        idParticipante: sucesoAPI.idParticipante,
        timestamp: sucesoAPI.timestamp,
        tipoTarjeta: sucesoAPI.tipoTarjeta == 'ROJA' ? '1' : '2'
      }
    }else {
        suceso = {
          class: 'Gol',
          idParticipante: sucesoAPI.idParticipante,
          timestamp: sucesoAPI.timestamp
        }
    }
    return suceso;
    }

  mapearSucesos(sucesosAPI: any[]): Suceso[] {
    const sucesos: Suceso[] = [];
    sucesosAPI.forEach(s => sucesos.push(this.mapearSuceso(s)));
    return sucesos;
  }

}
