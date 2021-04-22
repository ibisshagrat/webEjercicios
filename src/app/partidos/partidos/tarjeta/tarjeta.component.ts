import { Component, Input, OnInit } from '@angular/core';
import { faSquareFull } from '@fortawesome/free-solid-svg-icons';
import { Suceso } from '../../models/suceso';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styles: [ 
    '.tarjetaRoja { color: red; }',
    '.tarjetaAmarilla { color: yellow; }',

  ]
})
export class TarjetaComponent implements OnInit {
  @Input() tarjeta:Suceso;
  tarjetaIcono = faSquareFull;
  //colorTarjeta: string;
  esAmarilla: boolean = false;
  esRoja: boolean = false;

  constructor() { }

  
  ngOnInit(): void {
    this.determinarColor();
  }

  determinarColor() {
    if (this.tarjeta.tipoTarjeta == 1) {
      //this.colorTarjeta = "tarjetaRoja";
      this.esRoja =  true
    } else if (this.tarjeta.tipoTarjeta == 2) {
      this.esAmarilla = true;
    }
  }

}
