import { EdgeComponent } from './../shared/edge/edge.component';
import { NodeComponent } from './../shared/node/node.component';
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
  filteredNodes: INode[];
  title: string;

  ngOnInit() {
    this.title = "Graph";

    this.dataService.getEdges()
      .subscribe((edges: IEdge[]) => {
        this.edges = this.filteredEdges = edges;
      });

    this.dataService.getNodes()
      .subscribe((nodes: INode[]) => {
        this.nodes = this.filteredNodes = nodes;
    });
  }

  

}
