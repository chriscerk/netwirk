import { SharedModule } from './../shared/shared.module';
import { GraphComponent } from './graph.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule, SharedModule
  ],
  declarations: [GraphComponent]
})
export class GraphModule { }
