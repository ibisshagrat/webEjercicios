import { Component, Input, OnInit } from '@angular/core';
import { Partido } from '../../models/partido';

@Component({
  selector: 'app-partido',
  templateUrl: './partido.component.html',
  styles: [
  ]
})
export class PartidoComponent implements OnInit {
  @Input() public partido:Partido

  constructor() { }

  ngOnInit(): void {
  }

}
