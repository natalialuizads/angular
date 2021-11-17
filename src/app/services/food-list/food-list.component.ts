import { Component, OnInit } from '@angular/core';
import { FoodListService } from '../food-list.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {
  public foodList: Array<string> = [];

  // Injeção de dependencia
  constructor(
    private service: FoodListService,
  ) { }

  ngOnInit(): void {
   this.foodList = this.service.getFoodList();
  }
}
