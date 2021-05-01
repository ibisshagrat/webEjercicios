import {
  Component,
  OnInit,
  //TemplateRef,
  //ViewChild,
  //ViewContainerRef,
} from '@angular/core';
import { Carta } from '../models/carta';
import { CartaImp } from '../models/carta-imp';
import { SetMagic } from '../models/set-magic';
import { MagicService } from '../services/magic.service';

@Component({
  selector: 'app-magic',
  templateUrl: './magic.component.html',
  styles: [
    '#mtg { background-image: url("./assets/mtg.jpg"); background-repeat: repeat-y; background-attachment: fixed; background-position: center; height: 88vh }',
  ],
})
export class MagicComponent implements OnInit {

  backdrop: any;
  sets: SetMagic[] = [];
  codigoSet: string = null;
  set: SetMagic;
  cartas: Carta[];
  carta: Carta = new CartaImp();

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

  mostrarCarta(carta: Carta) {
    this.carta = carta;
  }
}
