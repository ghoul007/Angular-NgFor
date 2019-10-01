import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrackElementComponent } from './track-element/track-element.component';
import { NgForOfComponent } from './ng-for-of/ng-for-of.component';


const routes: Routes = [
  {
    path:"", component: TrackElementComponent
  },
  {
    path:'ngforof', component: NgForOfComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
