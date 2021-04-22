import { Component, OnInit } from '@angular/core';
import { Propietario } from '../models/propietario';
import { PropietarioService } from '../services/propietarios.service';

@Component({
  selector: 'app-propietarios',
  templateUrl: './propietarios.component.html',
  styles: [
  ]
})
export class PropietariosComponent implements OnInit {

  propietarios: Propietario[] = [];

  constructor(private propietarioService: PropietarioService) { }

  ngOnInit(): void {

    this.propietarioService.getPropietarios().subscribe(response => {
      response.forEach(p => {
        this.propietarios.push(p);
      })
    });
    console.log(this.propietarios);
  }
}