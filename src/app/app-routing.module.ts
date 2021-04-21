import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { HeroesComponent } from './heroes/heroes.component';

const routes: Routes = [
   {
    path: '',
    loadChildren: () => import ('src/app/home/home.module').then(m => m.HomeModule) /*  si nos fijamos no se hace el Import de homeModule asi ganamos que no se cargue en el main */
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'contacts',
    loadChildren: () => import ('./contacts/contacts.module').then (m => m.ContactsModule)
  },
  {
    path: 'car',
    loadChildren: () => import('./car/car.module').then(m => m.CarModule)
  },
  {
    path: 'converter',
    loadChildren: () => import('./converter/converter.module').then(m => m.ConverterModule)
  },
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
    path: 'estudios',
    loadChildren: () => import('./estudios/estudios.module').then(m => m.EstudiosModule)
  },
  {
    path: 'partidos',
    loadChildren: () => import('./partidos/partidos.module').then(m => m.PartidosModule)
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
