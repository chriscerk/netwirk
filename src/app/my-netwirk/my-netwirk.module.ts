import { GraphModule } from './../graph/graph.module';
import { MyNetwirkComponent } from './my-netwirk.component';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    GraphModule
  ],
  declarations: [ MyNetwirkComponent ]
})
export class MyNetwirkModule { }
