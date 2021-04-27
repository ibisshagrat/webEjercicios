import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Carta } from '../models/carta';
import { SetMagic } from '../models/set-magic';
import { MagicService } from '../services/magic.service';

@Component({
  selector: 'app-magic',
  templateUrl: './magic.component.html',
  styles: [
    'div.mtg: {background-image: url("./assets/mtg.jpg")}'
  ],
})
export class MagicComponent implements OnInit {
  sets: SetMagic[] = [];
  codigoSet: string = null;
  set: SetMagic;
  cartas: Carta[];

  constructor(private magicService: MagicService) {}

  ngOnInit(): void {
    this.magicService.getSets().subscribe((response) => {
      this.sets = this.magicService.mapearSets(response);
      console.log(this.sets);
    });
  }

  cargarSet() {
    this.set = null;
    console.log('cargar ', this.codigoSet);
    this.set = this.sets.filter((s) => s.code == this.codigoSet)[0];
    this.magicService.getCartasSet(this.set.code).subscribe((response) => {
      this.cartas = this.magicService.mapearCartas(response);
      console.log(this.cartas);
    });
  }

  mostrarCarta() {}
}
