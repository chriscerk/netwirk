import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { EnsureModuleLoadedOnceGuard } from './ensure-module-loaded-once.guard';
import { DataService } from './services/data.service';


@NgModule({
  imports: [ CommonModule, RouterModule, HttpModule ],
  exports: [ RouterModule, HttpModule ],
  declarations: [ ],
  providers: [ DataService ] 
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {

  //Looks for this module in parent injector to see if already been loaded
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }  

}