import { INode, IEdge } from './../shared/interfaces';
import { DataService } from './../core/services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  constructor(private dataService: DataService) { }

  nodes: INode[];
  edges: IEdge[];
  filteredEdges: IEdge[];
  title: string;

  ngOnInit() {
    this.title = "Test Graph";

     this.dataService.getEdges()
        .subscribe((edges: IEdge[]) => {
          this.edges = this.filteredEdges = edges;
        });
  }

}
