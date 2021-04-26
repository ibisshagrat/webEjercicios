import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Participante } from '../models/participante';
import { ParticipanteImpl } from '../models/participante-impl';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ParticipanteService {
  host: string = environment.hostHateoas;
  urlEndPointHateoas: string = `${this.host}/participantes/`;

  constructor(private http: HttpClient) {}

  getParticipantes(): Observable<any> {
    return this.http.get(`${this.urlEndPointHateoas}?page=0&size=1000`);
  }

  getParticipante(id:string): Observable<any> {
    let urlGet = `${this.urlEndPointHateoas}${id}`;
    return this.http.get(urlGet).pipe(
      catchError((e) => {
        if (e.status !== 401 && e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(e);
      })
    );
  }

  editarParticipante(participante: Participante): Observable<any> {
    return this.http.put(`${this.urlEndPointHateoas}/${participante.id}`, participante).pipe(
      catchError((e) => {
        if (e.status === 400) {
          return throwError(e);
        }
        if (e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(e);
      })
    );
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${this.urlEndPointHateoas}${id}`)
    .pipe(
      catchError((e) => {
        if (e.status === 405) {
          console.error('Pide permisos para tocar la BBDD del jefe, y limpia toda la broza que has dejado!');
        }
        return throwError(e);
      })
    );

  }

  extraerParticipantes(respuestaApi: any): Participante[] {
    const participantes: Participante[] = [];
    let participanteMapeado: Participante;
    respuestaApi._embedded.participantes.forEach((p) => {
      participantes.push(this.mapearParticipante(p));
    });
    return participantes;
  }

  mapearParticipante(participanteAPI: any): ParticipanteImpl {
    const participante: ParticipanteImpl = new ParticipanteImpl();
    participante.id = participanteAPI.id;
    participante.nombre = participanteAPI.nombre;
    console.log("Dentro mapear", participante.id, participante.nombre);
    return participante;
  }

  altaParticipante(participante: Participante): Observable<any> {
    return this.http.post(`${this.urlEndPointHateoas}`, participante).pipe(
      catchError((e) => {
        console.log("error");
        if (e.status === 400) {
          return throwError(e);
        }
        if (e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(e);
      })
    );
  }

}
