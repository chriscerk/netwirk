import { GraphComponent } from './../graph/graph.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-netwirk',
  templateUrl: './my-netwirk.component.html',
  styleUrls: ['./my-netwirk.component.css']
})
export class MyNetwirkComponent implements OnInit {

  display: string;

  constructor() { }

  ngOnInit() {
    this.display = "tableView";
  }

}
