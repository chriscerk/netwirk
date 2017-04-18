import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { EnsureModuleLoadedOnceGuard } from './ensure-module-loaded-once.guard';
import { DataService } from './services/data.service';
import { D3Service } from 'd3-ng2-service';


@NgModule({
  imports: [ CommonModule, RouterModule, HttpModule ],
  exports: [ RouterModule, HttpModule ],
  declarations: [ ],
  providers: [ DataService, D3Service ]
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {

  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }

}
