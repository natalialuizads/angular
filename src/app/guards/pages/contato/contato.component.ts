import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contato',
  template: `
      <h1>Contato</h1>
      <router-outlet></router-outlet>
  `,
})
export class ContatoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
