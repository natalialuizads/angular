import { Component, OnInit } from '@angular/core';
import { FoodListService } from '../food-list.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
})
export class FoodListComponent implements OnInit {
  public foodList: Array<string> = [];

  // Injeção de dependencia
  constructor(
    private service: FoodListService,
  ) { }

  ngOnInit(): void {
   this.foodList = this.service.getFoodList();

   // Inscrição do evento emitido pelo serviço
   this.service.emitEvent.subscribe(
     (res) => alert(`Foi adicionado um novo item: ${res}`)
   )
  }
}
