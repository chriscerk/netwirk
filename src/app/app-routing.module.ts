import { IndieheadsComponent } from './indieheads/indieheads.component';
import { MyNetwirkComponent } from './my-netwirk/my-netwirk.component';
import { GraphComponent } from './graph/graph.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules, NoPreloading } from '@angular/router';
import { PreloadModulesStrategy } from './core/strategies/preload-modules.strategy';

const app_routes: Routes = [
  { path: '', pathMatch:'full', redirectTo: '/indieheads' },
  { path: 'indieheads', component: IndieheadsComponent},
  { path: 'myNetwirk', component: MyNetwirkComponent},
  { path: 'graph', component: GraphComponent},
  { path: 'about', loadChildren: 'app/about/about.module#AboutModule'},
  { path: '**', pathMatch:'full', redirectTo: '/indieheads' }
];

@NgModule({
  imports: [ RouterModule.forRoot(app_routes, { preloadingStrategy: PreloadAllModules }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }