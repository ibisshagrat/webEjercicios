import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Carta } from '../models/carta';
import { SetMagic } from '../models/set-magic';
import { MagicService } from '../services/magic.service';

@Component({
  selector: 'app-set',
  templateUrl: './set.component.html',
  styles: [
  ]
})
export class SetComponent implements OnInit {

  @Input() set: SetMagic;
  @Input() cartas: Carta[];
  @Output() mostrarCarta = new EventEmitter<Carta>();

  constructor(private magicService: MagicService) { }

  ngOnInit(): void {
  }

  solicitarModal(carta: Carta){
    return this.mostrarCarta.emit(carta);
  }
}
