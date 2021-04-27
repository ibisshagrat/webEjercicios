import {
  Component,
  OnInit,
  //TemplateRef,
  //ViewChild,
  //ViewContainerRef,
} from '@angular/core';
import { Carta } from '../models/carta';
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
//  @ViewChild('modal_carta') modal_carta: TemplateRef<any>;
//  @ViewChild('vc', { read: ViewContainerRef }) vc: ViewContainerRef;

  backdrop: any;
  sets: SetMagic[] = [];
  codigoSet: string = null;
  set: SetMagic;
  cartas: Carta[];
  carta: Carta;

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

/*     title = 'angulartoastr';
    showModal: boolean;
    mostrarCarta(carta: Carta) {
      this.carta = carta;
      console.log("modal", carta);
      this.showModal = true; // Show-Hide Modal Check
    }
    //Bootstrap Modal Close event
    hide() {
      this.showModal = false;
    } */

/*    mostrarCarta(carta: Carta) {
    console.log("modal", carta);
    this.carta = carta;
    let view = this.modal_carta.createEmbeddedView(null);
    this.vc.insert(view);
    this.modal_carta.elementRef.nativeElement.previousElementSibling.classList.remove(
      'fade'
    );
    this.modal_carta.elementRef.nativeElement.previousElementSibling.classList.add(
      'modal-open'
    );
    this.modal_carta.elementRef.nativeElement.previousElementSibling.style.display =
      'block';
    this.backdrop = document.createElement('DIV');
    this.backdrop.className = 'modal-backdrop';
    document.body.appendChild(this.backdrop);
  }

  closeDialog() {
    this.vc.clear();
    document.body.removeChild(this.backdrop);
  } */
}
