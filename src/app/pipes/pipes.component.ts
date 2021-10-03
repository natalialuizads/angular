import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {
  public listaTarefa: Array<{ tarefa: string }> = [{ tarefa: 'Aprendendo Angular'}];

  public tarefa: string = '';

  public data: Date = new Date();

  constructor() {}
  ngOnInit(): void {}

  public salvar(){
    this.listaTarefa.push({ tarefa: this.tarefa });
    this.tarefa = '';
  }

}
