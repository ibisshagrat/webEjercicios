import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Propietario } from '../models/propietario';
import { PropietariosImp } from '../models/propietarios-imp';
import { PropietarioService } from '../services/propietarios.service';

@Component({
  selector: 'app-propietario-form',
  templateUrl: './propietario-form.component.html',
  styles: [],
})
export class PropietarioFormComponent implements OnInit {
  tipoAcceso: string;
  esAlta: boolean;
  propietario: Propietario = new PropietariosImp();

  constructor(
    private route: ActivatedRoute,
    private propietarioService: PropietarioService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getId();
    if (this.esAlta) {
      this.tipoAcceso = 'Alta';
    } else {
      this.tipoAcceso = 'Modificar';
    }
  }

  private getId() {
    const idRecuperada = this.route.snapshot.params.id;
    if (idRecuperada != undefined) {
      this.propietarioService
        .getPropietario(idRecuperada)
        .subscribe((response) => {
          this.propietario = response;
          console.log('dentro de la suscripcion', this.propietario.id);
        });
      console.log('fuera de la subscripcion', this.propietario);
    } else {
      this.esAlta = true;
      this.propietario.nombre = '';
      this.propietario.apellido1 = '';
      this.propietario.apellido2 = '';
    }
  }

  onEnviar() {
    if (this.esAlta) {
      //Lo añadí para ver si solucionaba el problema con la modificación y sigue fallando. Lo comento
      /*
      this.propietario.numeroCuenta = 'unNumeroCuentaConMuchosDigitos';
      this.propietario.foto = 'UnaDireccion/enLocal/oServidor';
      this.propietario.comentarios = 'Comentarios de Prueba';
      this.propietario.negocio = null;
      this.propietario.pedidos = null;
      */

      this.propietarioService
        .altaPropietaro(this.propietario)
        .subscribe((response) => {
          console.log('alta usuario ', this.propietario.nombre);
          this.router.navigate(['/propietarios']);
        });
    } else {
      this.propietario.pedidos = null;
      this.propietarioService
        .modificarPropietario(this.propietario)
        .subscribe((response) => {
          console.log('modificado usuario ', this.propietario.id);
          this.router.navigate(['/propietarios']);
        });
    }
  }
}
