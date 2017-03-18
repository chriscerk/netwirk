import { INode } from './../interfaces';
import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.css']
})
export class NodeComponent implements OnInit {
  @Input() data: INode;
  @Input() format: string;
  
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {

  }
}
