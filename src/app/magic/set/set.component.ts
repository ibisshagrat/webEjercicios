import { Component, Input, OnInit } from '@angular/core';
import { Carta } from '../models/carta';
import { SetMagic } from '../models/set-magic';
import { MagicService } from '../services/magic.service';

@Component({
  selector: 'app-set',
  templateUrl: './set.component.html',
  styles: [
  ]
})
export class SetComponent implements OnInit {

  @Input() set: SetMagic;
  @Input() cartas: Carta[];

  constructor(private magicService: MagicService) { }

  ngOnInit(): void {
  }

}
