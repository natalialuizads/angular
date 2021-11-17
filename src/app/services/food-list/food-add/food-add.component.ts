import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FoodListService } from '../../food-list.service';

@Component({
  selector: 'app-food-add',
  templateUrl: './food-add.component.html',
})
export class FoodAddComponent implements OnInit {
  food: string = ''

  constructor(
    private service: FoodListService,
  ) { }

  ngOnInit(): void {
  }

  addFood(form: NgForm){
    this.service.addFood(form.value.food)
  }

}
