import { EdgeComponent } from './../shared/edge/edge.component';
import { NodeComponent } from './../shared/node/node.component';
import { INode, IEdge } from './../shared/interfaces';
import { DataService } from './../core/services/data.service';
import { Component, OnInit, Input, OnChanges, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { D3Service, D3 } from 'd3-ng2-service';

@Component({
  selector: 'graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
  @ViewChild('svg') private graphContainer: ElementRef;
  private svg: any;
  private margin: any = { top: 20, bottom: 20, left: 20, right: 20};
  private width: number;
  private height: number;
  private xScale: any;
  private yScale: any;
  private colors: any;
  private xAxis: any;
  private yAxis: any;
  private d: any;

  @Input() format: string;
  nodes: INode[];
  edges: IEdge[];
  filteredEdges: IEdge[];
  filteredNodes: INode[];
  title: string;
  private d3: D3;

  constructor(private dataService: DataService, private d3Service: D3Service) {
    this.d3 = d3Service.getD3();
  }

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

  ngOnChanges() {

  }

  createGraph() {
    let element = this.graphContainer.nativeElement;
    this.width = element.offsetWidth - this.margin.left - this.margin.right;
    let svg = this.d3.select(element).append('svg')
      .attr('width', element.offsetWidth)
      .attr('height', element.offsetHeight);
    
    var color = this.d3.scaleOrdinal(this.d3.schemeCategory20);

    var simulation = this.d3.forceSimulation()
      .force("link", this.d3.forceLink().id(function(d: any) { return d.id; }))
      .force("charge", this.d3.forceManyBody())
      .force("center", this.d3.forceCenter(this.width / 2, this.height / 2));

      var link = svg.append("g")
          .attr("class", "links")
          .selectAll("line")
          .data(this.edges)
          .enter().append("line")
          .attr("stroke-width", function(d: any) { return Math.sqrt(d.value); });

      var node = svg.append("g")
          .attr("class", "nodes")
          .selectAll("circle")
          .data(this.nodes)
          .enter().append("circle")
          .attr("r", 5)
          .attr("fill", function(d: any) { return color(d.group); });
          // .call(this.d3.drag()
          //     .on("start", dragstarted)
          //     .on("drag", dragged)
          //     .on("end", dragended));

      node.append("title")
          .text(function(d: any) { return d.id; });

      simulation
          .nodes(this.nodes)
          .on("tick", ticked);

      function ticked() {
        link
            .attr("x1", function(d: any) { return d.source.x; })
            .attr("y1", function(d: any) { return d.source.y; })
            .attr("x2", function(d: any) { return d.target.x; })
            .attr("y2", function(d: any) { return d.target.y; });

        node
            .attr("cx", function(d: any) { return d.x; })
            .attr("cy", function(d: any) { return d.y; });
      }

    function dragstarted(d) {
      if (!this.d3.event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    }

    function dragged(d) {
      d.fx = this.d3.event.x;
      d.fy = this.d3.event.y;
    }

    function dragended(d) {
      if (!this.d3.event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    }
  }
}
