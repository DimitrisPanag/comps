import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { ViewsHomeComponent } from './views-home/views-home.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    ViewsHomeComponent
  ],
  exports:[]
})
export class ViewsModule { }
