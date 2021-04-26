import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Propietario } from '../../models/propietario';

@Component({
  selector: 'app-propietario',
  templateUrl: './propietario.component.html',
  styles: [
  ]
})
export class PropietarioComponent implements OnInit {
  @Input() propietario: Propietario;
  @Output() borrar = new EventEmitter();
  rutaEditar: string;

  constructor() { }

  ngOnInit(): void {
    this.rutaEditar = `editar/${this.propietario.id}`
  }

  public onBorrar(propietario: Propietario){
    return this.borrar.emit(propietario);
  }
}
