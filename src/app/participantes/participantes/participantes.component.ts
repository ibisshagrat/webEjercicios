import { Component, OnInit } from '@angular/core';
import { Participante } from '../models/participante';
import { ParticipanteService } from '../services/participante.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-participantes',
  templateUrl: './participantes.component.html',
  styles: [
  ]
})
export class ParticipantesComponent implements OnInit {

  participantes:Participante[] = [];
  Router: any;

  constructor(private participanteService: ParticipanteService) { }

  ngOnInit(): void {
    this.participanteService.getParticipantes().subscribe(response => {
      this.participantes = this.participanteService.extraerParticipantes(response);
    })
  }

  public borrarParticipante(id:string) {
    this.participanteService.delete(id).subscribe(response => {
      console.log("se elimino a ", id, response.status);
      this.participantes = this.participantes.filter(p => p.id != id);
      })
  }

}

