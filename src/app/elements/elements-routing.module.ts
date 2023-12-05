import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElementsHomeComponent } from './elements-home/elements-home.component';

export const elementsRoutes: Routes = [
  {path: 'elements', component: ElementsHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(elementsRoutes)],
  exports: [RouterModule]
})
export class ElementsRoutingModule { }
