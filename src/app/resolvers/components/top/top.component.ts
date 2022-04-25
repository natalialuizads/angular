import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
})
export class TopComponent implements OnInit {

  data: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.data = this.route.snapshot.data;
  }

}
