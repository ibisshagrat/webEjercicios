import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MagicRoutingModule } from './magic-routing.module';
import { MagicComponent } from './magic/magic.component';
import { SetComponent } from './set/set.component';
import { CartaComponent } from './carta/carta.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [MagicComponent, SetComponent, CartaComponent],
  imports: [
    CommonModule,
    MagicRoutingModule,
    FormsModule
  ]
})
export class MagicModule { }
