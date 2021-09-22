import {
  Input,
  OnChanges,
  OnInit,
  Component,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
})
export class LifecycleComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  public valor: number = 1;
  public destruir: boolean = true;
  @Input() public exemplo: string = 'Estou aprendendo sobre ciclo de vida do angular!';

  constructor() {}

  /**
   * ngOnInit()
   * Este evento é inicializado após o Angular exibir pela
   * primeira vez as propriedades vinculadas aos dados ou
   * quando o componente foi inicializado.
   * Este evento é usado principalmente para inicializar
   * dados em um componente.
   */
  ngOnInit(): void {
    console.log('Sou chamado na inicialização do componente');
  }

  /**
   * ngOnChanges()
   * Este evento é executado sempre que um valor de um
   * controle de entrada dentro componente é alterado.
   * Sempre que um componente recebe um dado através do
   * @Input() o ngOnChanges() é invocado
   */
  ngOnChanges(): void {
    console.log('Foi alterado o valor do input');
  }

  /**
   * ngDoCheck()
   * Este evento é disparado sempre que as propriedades
   * de entrada de um componente são verificadas.
   */
  ngDoCheck(): void {
    console.log('ngDoCheck - Fui chamado porque houve alteração');
  }

  /**
   * ngAfterContentInit()
   * Este método de ciclo de vida é executado quando o
   * angular realiza qualquer projeção de conteúdo nas
   * visualizações do componente.
   */
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  /**
   * ngAfterContentChecked()
   * Este método de gancho de ciclo de vida é executado
   * sempre que o conteúdo do componente é verificado
   * pelo mecanismo de detecção de alteração do Angular.
   */
  ngAfterContentChecked(): void {
    console.log(
      'ngAfterContentChecked - Fui chamado por que teve alteração no content'
    );
  }

  /**
   * ngAfterViewInit()
   * Este método de gancho de ciclo de vida é executado
   * quando a visualização do componente foi totalmente
   * inicializada.
   */
  ngAfterViewInit(): void {
    console.log(
      'ngAfterViewInit - Fui chamado por que visualização do componente foi totalmente inicializada'
    );
  }

  /**
   * ngAfterViewChecked()
   * Este é executado toda vez que a visualização de um
   * determinado componente foi verificada pelo algoritmo
   * de detecção de alterações do angular.
   */
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  /**
   * ngOnDestroy()
   * Este é executado toda vez que um componente for destruído.
   * Utilizar quando fazer requisição HTTP para não gerar mémoria
   * memory leak.
   */
  ngOnDestroy(): void {
      console.log('Eu fui destruído, tchaaaau');
  }

  public adicionar(): number {
    return this.valor++;
  }

  public destruirComponente() {
    this.destruir = false;
  }
}
