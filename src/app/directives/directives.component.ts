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

  public list: Array<{ nome: string; idade: number }> = [
    { nome: 'Natália ', idade: 26 },
    { nome: 'Brenda', idade: 24 },
    { nome: 'Apolo ', idade: 2 },
  ];

  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      if (this.condition) this.condition = false;
    }, 2000);
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
}
