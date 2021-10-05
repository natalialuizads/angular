import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulesComponent } from './modules.component';

/**
 * Um module é um mecanismo para agrupar components,
 * diretivas, pipes e serviços relacionados, de forma
 * a combinar com outros módulos para criar um aplicativo.
 *
 * Importante: Importar sempre o CommonModule
 *
 * Anatomia (ngModule)
 *
 * @NgModule({
 * declarations: [],  Declaração dos componentes, diretivas e pipes
 * imports: [],  Importa funcionalidade de outros componentes
 * exports: [],  Exportar o componente
 * provides: [], Registra o service
 * bootstrap: [], Só pode ser usado no componente principal, ele que informa componente que start toda aplicação
 * })
 */

@NgModule({
  declarations: [
    ModulesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ModulesComponent
  ]
})
export class ModulesModule { }
