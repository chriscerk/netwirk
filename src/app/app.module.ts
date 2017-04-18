import { IndieheadsModule } from './indieheads/indieheads.module';
import { BarchartComponent } from './shared/barchart/barchart.component';
import { MyNetwirkModule } from './my-netwirk/my-netwirk.module';
import { AppRoutingModule } from './app-routing.module';
import { GraphModule } from './graph/graph.module';
import { AboutModule } from './about/about.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    CoreModule,
    SharedModule,
    MyNetwirkModule,
    IndieheadsModule,
    GraphModule,
    AboutModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
