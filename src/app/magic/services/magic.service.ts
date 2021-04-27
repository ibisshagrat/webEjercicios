import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Carta } from '../models/carta';
import { SetMagic } from '../models/set-magic';
import { SetMagicImp } from '../models/set-magic-imp';

@Injectable({
  providedIn: 'root'
})
export class MagicService {

  urlEndPoint: string = environment.hostMagic;

  constructor(private http: HttpClient) { }

  getSets(): Observable<any> {
    return this.http.get<SetMagic>(`${this.urlEndPoint}sets`);
  }

  getCartasSet(id: string): Observable<any> {
    return this.http.get<SetMagic>(`${this.urlEndPoint}cards?set=${id}`);
  }

  mapearSets(setsApi: any): SetMagic[] {
    let sets: SetMagic[] = [];
    //let set: SetMagic = new SetMagicImp();
    sets = setsApi.sets;
/*     setsApi.sets.forEach(s => {
      set.code = s.code;
      set.name = s.name;
      sets.push(set);
    }); */
    return sets;
  }

  mapearCartas(cartasApi: any): Carta[] {
    let cartas: Carta[] = [];
    cartas = cartasApi.cards;
    return cartas;
  }

}
