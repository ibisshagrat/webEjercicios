import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Participante } from '../../models/participante';

@Component({
  selector: 'app-participante',
  templateUrl: './participante.component.html',
  styles: [
  ]
})
export class ParticipanteComponent implements OnInit {
  @Input() participante:Participante;
  @Output() public borrar = new EventEmitter<string>();
  rutaEditar: string;

  constructor() { }

  ngOnInit(): void {
    this.rutaEditar = `editar/${this.participante.id}`;
  }

  onBorrar(id:string) {
    console.log("empezamos el borrado");
    this.borrar.emit(id);
  }

}
