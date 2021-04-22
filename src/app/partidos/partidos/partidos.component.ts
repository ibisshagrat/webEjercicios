import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Partido } from '../models/partido';
import { Suceso } from '../models/suceso';

@Component({
  selector: 'app-partidos',
  templateUrl: './partidos.component.html',
  styles: [],
})
export class PartidosComponent implements OnInit {
  public partidos: Partido[] = environment.partidos;
  public partido: Partido = null;
  public idPartido: number;
  public muestraTarjetas: boolean = false;
  public tarjetas: Suceso[] = [];

  constructor() {}

  ngOnInit(): void {}

  public getPartido(): void {
    let resultado: Partido = this.partidos.filter(
      (c) => c.id == this.idPartido
    )[0];
    this.partido = resultado;
    this.calcularResultado();
    this.isTarjetas();
    this.mostrarTarjetas(false);

  }

  public calcularResultado(): void {
    let goles: Suceso[] = this.partido.sucesos.filter((s) => s.class == 'Gol');
    this.partido.marcadorLocal = goles.filter(
      (g) => g.idParticipante == this.partido.idLocal
    ).length;
    this.partido.marcadorVisitante = goles.filter(
      (g) => g.idParticipante == this.partido.idVisitante
    ).length;
  }

  public isTarjetas(): void {
    let cantidadTarjetas = this.partido.sucesos.filter(s => s.class == "Tarjeta").length;
    if (cantidadTarjetas > 0) {
      this.partido.hayTarjetas = true;
    } else {
      this.partido.hayTarjetas = false;
    }
  }

  public mostrarTarjetas(orden: boolean) {
    this.muestraTarjetas = orden;
    if (orden) {
      this.tarjetas = this.partido.sucesos.filter((s) => s.class == 'Tarjeta');
    }
  }
}
