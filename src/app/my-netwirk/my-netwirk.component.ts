import { IPost, IMediaPost } from './../shared/interfaces';
import { DataService } from './../core/services/data.service';
import { GraphComponent } from './../graph/graph.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-netwirk',
  templateUrl: './my-netwirk.component.html',
  styleUrls: ['./my-netwirk.component.css']
})
export class MyNetwirkComponent implements OnInit {

  display: string;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.display = "tableView";
  }
}
