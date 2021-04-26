import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Propietario } from '../models/propietario';
import { PropietariosImp } from '../models/propietarios-imp';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PropietarioService {
  private urlEndPoint: string = environment.hostControladores + 'propietarios';

  constructor(private http: HttpClient) { }

  getPropietarios(): Observable<Propietario[]> {
    return this.http.get<Propietario[]>(this.urlEndPoint);
  }

  getPropietario(id:number): Observable<Propietario> {
    return this.http.get<Propietario>(`${this.urlEndPoint}/${id}`);
  }

  borrarPropietario(propietario: Propietario): Observable<any> {
    return this.http.delete(`${this.urlEndPoint}/sin-correo/${propietario.id}`);
  }

  modificarPropietario(propietario: Propietario): Observable<any> {
    return this.http.put<any>(`${this.urlEndPoint}/${propietario.id}`, propietario);
  }

  altaPropietaro(propietario: Propietario): Observable<any> {
    return this.http.post(`${this.urlEndPoint}/sin-correo`, propietario).pipe(
      catchError(e => {
        alert(e.message)
        return e;
      })
    );

  }

  mapearPropietarios(propietariosApi: any[]):Propietario[] {
    let propietarios: Propietario[] = [];
    propietariosApi.forEach(p => {
      propietarios.push(this.mapearPropietario(p));
    });
    console.log(propietarios);
    return propietarios;
  }

  mapearPropietario(propietarioApi: any): Propietario {
    let propietarioSalida = new PropietariosImp();
    propietarioSalida.id = propietarioApi.id;
    propietarioSalida.nombre = propietarioApi.nombre;
    propietarioSalida.apellido1 = propietarioApi.apellido1;
    propietarioSalida.apellido2 = propietarioApi.apellido2;
    propietarioSalida.mail = propietarioApi.mail;
    propietarioSalida.numeroCuenta = propietarioApi.numeroCuenta;
    propietarioSalida.negocio = propietarioApi.negocio;
    propietarioSalida.foto = propietarioApi.foto;
    propietarioSalida.pedidos = propietarioApi.pedidos;
    propietarioSalida.comentarios = propietarioApi.comentarios;
    return propietarioSalida;
  }
}
