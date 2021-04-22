import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Propietario } from '../models/propietario';

@Injectable({
  providedIn: 'root'
})
export class PropietarioService {
//Lo ponemos en privado porque solo el servicio puede acceder  al url a atacar
  private urlEndPoint: string = environment.hostControladores + 'propietarios';

  constructor(private http: HttpClient) { }

  getPropietarios(): Observable<Propietario[]> { //devuelve el observable 
  //subject
    return this.http.get<Propietario[]>(this.urlEndPoint);
  }
}