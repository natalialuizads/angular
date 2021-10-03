import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss'],
})
export class DirectivesComponent implements OnInit {
  public condition: boolean = true;

  public conditionClick: boolean = false;

  public nome: string = 'Natália';

  public heightPx: string = '20px';

  public backgroundColor: string = 'blue';

  public valor: boolean = true;

  public tarefa: string = '';

  public listaTarefa: Array<{ tarefa: string }> = [{ tarefa: 'Aprendendo Angular'}];

  public list: Array<{ nome: string; idade: number }> = [
    { nome: 'Natália ', idade: 26 },
    { nome: 'Brenda', idade: 24 },
    { nome: 'Apolo ', idade: 1 },
  ]; 

  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      if (this.condition) this.condition = false;
    }, 2000);

    setInterval(() => {
      this.valor ? this.valor = false : this.valor = true
    }, 2000)

    setInterval(() => {
      this.heightPx === '20px' ? this.heightPx = '50px' : this.heightPx = '20px'
    }, 2000)
  }

  public onClick() {
    this.conditionClick = !this.conditionClick;
  }

  public onClickAddList() {
    this.list.push({ nome: 'João', idade: 35 });
  }

  public onClickEventList(number: number) {
    this.list.splice(number, 1)
  }

  public salvar(){
    this.listaTarefa.push({ tarefa: this.tarefa });
    this.tarefa = '';
  }
}
