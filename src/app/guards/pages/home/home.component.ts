import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: ['a { padding: 0.5em; }']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public exit(): boolean {
    if(confirm('Você quer sair?')){
      return true;
    }
    return false;
  }

}
