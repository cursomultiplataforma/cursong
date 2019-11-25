import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PrimercomponenteComponent} from './primercomponente/primercomponente.component';
import {SegundocomponenteComponent} from './segundocomponente/segundocomponente.component';

const routes: Routes = [
  {path: 'primero', component: PrimercomponenteComponent},
  {path: 'segundo', component: SegundocomponenteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
