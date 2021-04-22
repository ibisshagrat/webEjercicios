import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Partido } from '../../models/partido';

@Component({
  selector: 'app-partido',
  templateUrl: './partido.component.html',
  styles: [
  ]
})
export class PartidoComponent implements OnInit {
  @Input() public partido:Partido;
  @Output() public mostrarTarjeta = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

}
