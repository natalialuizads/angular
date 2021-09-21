import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  public title: string = 'Meu primeiro componente no angular!'

  constructor() {};

  ngOnInit(): void {};

}
