import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-asignatura',
  templateUrl: './asignatura.component.html',
  styles: [
  ]
})
export class AsignaturaComponent implements OnInit {
  public codAsignatura = '';
  constructor(activateRoute: ActivatedRoute) {
    this.codAsignatura =  activateRoute.snapshot.params['codAsignatura'];
   }

  ngOnInit(): void {
  }

}
