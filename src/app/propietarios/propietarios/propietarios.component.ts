import { Component, OnInit } from '@angular/core';
import { Propietario } from '../models/propietario';
import { PropietarioService } from '../services/propietarios.service';

@Component({
  selector: 'app-propietarios',
  templateUrl: './propietarios.component.html',
  styles: [],
})
export class PropietariosComponent implements OnInit {
  propietarios: Propietario[] = [];

  constructor(private propietarioService: PropietarioService) {}

  ngOnInit(): void {
    this.propietarioService.getPropietarios().subscribe((response) => {
      this.propietarios = this.propietarioService.mapearPropietarios(response);
    });
  }

  onBorrar(propietario: Propietario) {
    this.propietarioService
      .borrarPropietario(propietario)
      .subscribe((response) => {
        console.log(
          'Se elimina a ',
          propietario.nombre,
          propietario.apellido1,
          propietario.apellido2
        );
        this.propietarios = this.propietarios.filter(
          (p) => p.id !== propietario.id
        );
      });
  }
}
