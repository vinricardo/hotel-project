import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardLodgingAvailableComponent } from './card-lodging-available/card-lodging-available.component';
import { CardLodgingOfersComponent } from './card-lodging-ofers/card-lodging-ofers.component';
import { DetailHotelComponent } from './detail-hotel/detail-hotel.component';
import { SidenavComponent } from './sidenav/sidenav.component';



@NgModule({
  declarations: [
    SidenavComponent,
    CardLodgingAvailableComponent,
    CardLodgingOfersComponent,
    DetailHotelComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [SidenavComponent,CardLodgingAvailableComponent,CardLodgingOfersComponent,DetailHotelComponent]
})
export class SharedModule { }
