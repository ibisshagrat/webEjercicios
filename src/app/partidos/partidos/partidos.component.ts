import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Partido } from '../models/partido';

@Component({
  selector: 'app-partidos',
  templateUrl: './partidos.component.html',
  styles: [],
})
export class PartidosComponent implements OnInit {
  public partidos: Partido[] = environment.partidos;
  public partido: Partido;
  public idPartido:number;

  constructor() {}

  ngOnInit(): void {}

  public getPartido(): void {
    let resultado:Partido = this.partidos.filter(c => c.id == this.idPartido)[0];
    this.partido = resultado;    
  }
}
