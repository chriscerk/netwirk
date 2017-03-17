import { IEdge } from './../interfaces';
import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'edge',
  templateUrl: './edge.component.html',
  styleUrls: ['./edge.component.css']
})
export class EdgeComponent implements OnInit {
  @Input() data: IEdge;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {

  }
}
