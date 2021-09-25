import { Component, OnInit } from '@angular/core';

interface Position { 
  x: number,
  y: number,
}

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss'],
})
export class DataBindingComponent implements OnInit {
  public interpolation: string = 'Estou aprendendo angular :)';

  public disableButton: boolean = true;

  public imagemUrl: string =
    'https://freepngimg.com/thumb/dog/56-dog-png-image.png';

  public imagemTitle: string = 'Imagem de um cachorrinho';

  public nome: string = 'Natália Luiza';

  public idade: number = 26;

  public position: Position = {x: 0, y: 0};

  constructor() {}

  ngOnInit(): void {}

  /**
   * Para ver todos os eventos procurar a interface
   * GlobalEventHandlersEventMap dentro do arquivo
   * lib.dom.d.ts
   */
  public onClick(texto: string): void { 
   alert(texto)
  }

  public onMouseMove(event: MouseEvent): void {
   this.position = { x: event.offsetX, y: event.offsetY };
  }
}
