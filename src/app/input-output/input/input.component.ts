import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
})
export class InputComponent implements OnInit {

  @Input() public contador: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
