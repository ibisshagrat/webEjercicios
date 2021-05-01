import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Carta } from '../models/carta';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styles: [
    '.card { background-color: rgba(255,255,255,0.5); }',
    'img { cursor: pointer; }',
    '.imagenModal { border-radius: 15px }',
    '.modal-dialog { max-width: 100%; width: auto !important; display: inline-block; }'

    ]
})
export class CartaComponent implements OnInit {

  @Input() carta: Carta;
  @Output() mostrarCarta = new EventEmitter<Carta>();
  flavor: string
  longitudMax: number = 50;


  constructor() { }

  ngOnInit(): void {

    if (this.carta.flavor !=null) {
      if (this.carta.flavor.length > this.longitudMax) {
        this.flavor = this.carta.flavor.substr(0, this.longitudMax)+"...";
      } else {
        this.flavor = this.carta.flavor
      }
    }
  }

  onSolicitarModal() {
    return this.mostrarCarta.emit();
  }

  mandarCarta() {
    return this.mostrarCarta.emit(this.carta);
  }
}
