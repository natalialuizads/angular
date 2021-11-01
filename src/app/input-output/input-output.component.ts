import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.scss']
})
export class InputOutputComponent implements OnInit {
  public addValue: number = 0;

  public getDados: { nome: string, idade: number } | undefined;

  constructor() { }

  ngOnInit(): void {}

  public add() {
    this.addValue += 1;
  }

  public setDados(event: { nome: string, idade: number }) {
    this.getDados = event;
  }

}
