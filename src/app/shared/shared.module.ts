import { BarchartModule } from './barchart/barchart.module';
import { NodeModule } from './node/node.module';
import { EdgeModule } from './edge/edge.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BarchartComponent } from './barchart/barchart.component';


@NgModule({
  imports: [ CommonModule, EdgeModule, NodeModule, BarchartModule, EdgeModule, NodeModule ],
  exports: [ CommonModule, FormsModule, EdgeModule, NodeModule ],
  declarations: []
})
export class SharedModule { }