import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MagicComponent } from './magic/magic.component';

const routes: Routes = [
  {
    path: '',
    component: MagicComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MagicRoutingModule { }
