import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndieheadsComponent } from './indieheads.component';

@NgModule({
  imports: [
    CommonModule, SharedModule
  ],
  declarations: [IndieheadsComponent]
})
export class IndieheadsModule { }
