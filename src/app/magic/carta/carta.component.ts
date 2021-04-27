import { Component, Input, OnInit } from '@angular/core';
import { Carta } from '../models/carta';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styles: [
  ]
})
export class CartaComponent implements OnInit {

  @Input() carta: Carta;
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

}
