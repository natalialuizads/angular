import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {
  public condition: boolean = true;
  public conditionClick: boolean = false;
  constructor() { }

  ngOnInit(): void {
    setInterval(() => { if(this.condition) this.condition = false }, 2000)
  }

  public onClick(){
    this.conditionClick = !this.conditionClick 
  }

}
