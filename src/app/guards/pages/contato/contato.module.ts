import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContatoRoutingModule } from './contato-routing.module';
import { ContatoComponent } from './contato.component';
import { SuporteComponent } from './suporte/suporte.component';


@NgModule({
  declarations: [
    ContatoComponent,
    SuporteComponent
  ],
  imports: [
    CommonModule,
    ContatoRoutingModule
  ],
  exports: [ContatoComponent]
})
export class ContatoModule { }
