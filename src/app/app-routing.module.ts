import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrackElementComponent } from './track-element/track-element.component';


const routes: Routes = [
  {
    path:"", component: TrackElementComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
