import { Component, OnInit } from '@angular/core';
import { faCaretSquareUp, faFutbol } from '@fortawesome/free-regular-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {
  title: string = environment.appName;
  futbol = faFutbol;
  cajaFlecha =faCaretSquareUp
  book = faBook;

  constructor() { }

  ngOnInit(): void {
      }

}
