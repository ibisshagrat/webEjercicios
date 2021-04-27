import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Carta } from '../models/carta';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styles: [
    '.card { background-color: rgba(255,255,255,0.5); }',
    'img { cursor: pointer; }'
    ]
})
export class CartaComponent implements OnInit {

  @Input() carta: Carta;
  @Output() mostrarCarta = new EventEmitter();
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

}
