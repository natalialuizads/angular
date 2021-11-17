import { Injectable } from '@angular/core';

// É disponivel em qualquer componente
@Injectable({
  providedIn: 'root'
})
export class FoodListService {

  private list: Array<string> = [
    "X bacon",
    "X salada",
    "X Tudo",
  ]
  constructor() { }

  public getFoodList(): Array<string> {
    return this.list;
  }

  public addFood(food: string): void {
    this.list.push(food)
  }
}
