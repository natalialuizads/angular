import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-input-output [contador]="addValue"></app-input-output>
  <button (click)="add()">Adicionar</button>
  `,
})
export class AppComponent {

  public addValue: number = 0;
  constructor(){}

  add(): void {
    this.addValue++;
  }
}
