import { Component, OnInit } from '@angular/core';

//Model
import { Investiments } from '../../model/investiments';

//Service
import { ListInvestimentsService } from '../../services/list-investiments.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit {
  public investments!: Array<Investiments>;

  constructor(private listInvestimentsService: ListInvestimentsService) {}

  ngOnInit(): void {
    this.listInvestimentsService
      .list()
      .subscribe((res) => (this.investments = res));
  }
}
