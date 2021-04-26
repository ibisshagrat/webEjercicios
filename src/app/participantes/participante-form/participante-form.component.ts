import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Participante } from '../models/participante';
import { ParticipanteImpl } from '../models/participante-impl';
import { ParticipanteService } from '../services/participante.service';

@Component({
  selector: 'app-participante-form',
  templateUrl: './participante-form.component.html',
  styles: [],
})
export class ParticipanteFormComponent implements OnInit {
  tipoAcceso: string;
  participante: Participante;
  esAlta: boolean;

  constructor(
    private route: ActivatedRoute,
    private participanteService: ParticipanteService,
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
      this.participanteService.getParticipante(idRecuperada).subscribe(response => {
        this.participante = this.participanteService.mapearParticipante(response);
        console.log("dentro del suscripcion", this.participante.id);
      });
      console.log("fuera de la subscripcion", this.participante);
    } else {
      this.esAlta = true;
      this.participante = new ParticipanteImpl();
      this.participante.id = '';
      this.participante.nombre = '';
    }
  }

  public onEnviar() {
    if (this.esAlta) {
      this.participanteService
        .altaParticipante(this.participante)
        .subscribe((response) => {
          console.log('Se ha añadido a ', this.participante.nombre);
          this.router.navigate(['/participantes']);
        });
    } else {
      this.participanteService.editarParticipante(this.participante).subscribe((response) => {
        console.log('Se ha modificado a ', this.participante.nombre);
        this.router.navigate(['/participantes']);
      });
    }
  }
}
