import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss'],
})
export class TemplateFormComponent implements OnInit {
  public listCidades: Array<{ cidade: string; estado: string }> = [
    { cidade: 'São Paulo', estado: 'SP' },
    { cidade: 'Rio de Janeiro', estado: 'RJ' },
    { cidade: 'Bahia', estado: 'BH' },
    { cidade: 'Minas Gerais', estado: 'MG' },
  ];
  constructor() {}

  ngOnInit(): void {}

  public submitForm(form: NgForm): void {
    if (form.valid) {
      console.log(form.value);
    }
  }
}
