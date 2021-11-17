import { EventEmitter, Injectable } from '@angular/core';

// É disponivel em qualquer componente
@Injectable({
  providedIn: 'root'
})
export class FoodListService {
  public emitEvent = new EventEmitter();

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
    this.foodListAlert(food)
    this.list.push(food)
  }

  // Subscribe - Exemplo de emitir evento.
  public foodListAlert(food: string){
    this.emitEvent.emit(food)
  }
}
