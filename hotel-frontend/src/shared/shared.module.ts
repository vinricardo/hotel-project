import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardLodgingAvailableComponent } from './card-lodging-available/card-lodging-available.component';
import { SidenavComponent } from './sidenav/sidenav.component';



@NgModule({
  declarations: [
    SidenavComponent,
    CardLodgingAvailableComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [SidenavComponent,CardLodgingAvailableComponent]
})
export class SharedModule { }
