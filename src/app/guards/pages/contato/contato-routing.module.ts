import { ContatoComponent } from './contato.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuporteComponent } from './suporte/suporte.component';

const routes: Routes = [
  {
    path: '',
    component: ContatoComponent,
    children: [
      {
        path: 'suporte',
        component: SuporteComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContatoRoutingModule { }
