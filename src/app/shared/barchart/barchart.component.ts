import { Component, OnInit, ViewEncapsulation, OnChanges, Input, ViewChild, ElementRef } from '@angular/core';
import { D3Service, D3 } from 'd3-ng2-service';


@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BarchartComponent implements OnInit, OnChanges {
  @ViewChild('chart') private chartContainer: ElementRef;
  @Input() private chartData: Array<any>;
  private margin: any = { top: 20, bottom: 20, left: 20, right: 20};
  private chart: any;
  private width: number;
  private height: number;
  private xScale: any;
  private yScale: any;
  private colors: any;
  private xAxis: any;
  private yAxis: any;
  private d3: D3;
    
  constructor(private d3Service: D3Service) {
    this.d3 = d3Service.getD3();
  }

  ngOnInit() {
    this.createChart();
    if (this.chartData) {
      this.updateChart();
    }
  }

  ngOnChanges() {
    if (this.chart) {
      this.updateChart();
    }
  }

  createChart() {
    let element = this.chartContainer.nativeElement;
    this.width = element.offsetWidth - this.margin.left - this.margin.right;
    this.height = element.offsetHeight - this.margin.top - this.margin.bottom;
    let svg = this.d3.select(element).append('svg')
      .attr('width', element.offsetWidth)
      .attr('height', element.offsetHeight);

    // chart plot area
    this.chart = svg.append('g')
      .attr('class', 'bars')
      .attr('transform', `translate(${this.margin.left}, ${this.margin.top})`);

    // define X & Y domains
    let xDomain = this.chartData.map(d => d.genre_name);
    let yDomain = [0, this.d3.max(this.chartData, d => d.popularity)];

    // create scales
    this.xScale = this.d3.scaleBand().padding(0.1).domain(xDomain).rangeRound([0, this.width]);
    this.yScale = this.d3.scaleLinear().domain(yDomain).range([this.height, 0]);

    // bar colors
    this.colors = this.d3.scaleLinear().domain([0, this.chartData.length]).range(<any[]>['red', 'blue']);

    // x & y axis
    this.xAxis = svg.append('g')
      .attr('class', 'axis axis-x')
      .attr('transform', `translate(${this.margin.left}, ${this.margin.top + this.height})`)
      .call(this.d3.axisBottom(this.xScale));
    this.yAxis = svg.append('g')
      .attr('class', 'axis axis-y')
      .attr('transform', `translate(${this.margin.left}, ${this.margin.top})`)
      .call(this.d3.axisLeft(this.yScale));
  }

  updateChart() {
    // update scales & axis
    this.xScale.domain(this.chartData.map(d => d.genre_name));
    this.yScale.domain([0, this.d3.max(this.chartData, d => d.popularity)]);
    this.colors.domain([0, this.chartData.length]);
    this.xAxis.transition().call(this.d3.axisBottom(this.xScale));
    this.yAxis.transition().call(this.d3.axisLeft(this.yScale));

    let update = this.chart.selectAll('.bar')
      .data(this.chartData);

    // remove exiting bars
    update.exit().remove();

    // update existing bars
    this.chart.selectAll('.bar').transition()
      .attr('x', d => this.xScale(d.genre_name))
      .attr('y', d => this.yScale(d.popularity))
      .attr('width', d => this.xScale.bandwidth())
      .attr('height', d => this.height - this.yScale(d.popularity))
      .style('fill', (d, i) => this.colors(i));

    // add new bars
    update
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', d => this.xScale(d.genre_name))
      .attr('y', d => this.yScale(d.popularity))
      .attr('width', this.xScale.bandwidth())
      .attr('height', 0)
      .style('fill', (d, i) => this.colors(i))
      .transition()
      .delay((d, i) => i * 10)
      .attr('y', d => this.yScale(d.popularity))
      .attr('height', d => this.height - this.yScale(d.popularity));
  }

}
