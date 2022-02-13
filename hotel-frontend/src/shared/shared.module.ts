import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardLodgingAvailableComponent } from './card-lodging-available/card-lodging-available.component';
import { CardLodgingOfersComponent } from './card-lodging-ofers/card-lodging-ofers.component';
import { SidenavComponent } from './sidenav/sidenav.component';



@NgModule({
  declarations: [
    SidenavComponent,
    CardLodgingAvailableComponent,
    CardLodgingOfersComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [SidenavComponent,CardLodgingAvailableComponent,CardLodgingOfersComponent]
})
export class SharedModule { }
