import { Component, OnInit } from '@angular/core';

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
  public nome: string = 'Natália Luiza';
  public idade: number = 26;

  constructor() {}

  ngOnInit(): void {}

  onClick(): void { 
    console.log('Botão foi clicado');
  }
}
