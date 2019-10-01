import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrackElementComponent } from './track-element/track-element.component';
import { NgForOfComponent } from './ng-for-of/ng-for-of.component';

@NgModule({
  declarations: [
    AppComponent,
    TrackElementComponent,
    NgForOfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
