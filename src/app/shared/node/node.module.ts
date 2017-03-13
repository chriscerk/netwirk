import { NodeComponent } from './node.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ NodeComponent ],
  declarations: [ NodeComponent ]
})
export class NodeModule { }
