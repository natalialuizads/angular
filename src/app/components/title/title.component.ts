import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
})
export class TitleComponent implements OnDestroy {
  public title: string = 'Meu primeiro componente no angular!';

  constructor() {}

  ngOnDestroy(): void {
    console.log('Eu fui destruído, tchaaaau');
  }
}
