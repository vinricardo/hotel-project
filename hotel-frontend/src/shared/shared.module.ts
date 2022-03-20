import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CardLodgingAvailableComponent } from './card-lodging-available/card-lodging-available.component';
import { CardLodgingOfersComponent } from './card-lodging-ofers/card-lodging-ofers.component';
import { DetailHotelComponent } from './detail-hotel/detail-hotel.component';
import { MapComponent } from './map/map.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  declarations: [
    SidenavComponent,
    CardLodgingAvailableComponent,
    CardLodgingOfersComponent,
    DetailHotelComponent,
    MapComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    SidenavComponent,
    CardLodgingAvailableComponent,
    CardLodgingOfersComponent,
    DetailHotelComponent,
    MapComponent,
  ],
})
export class SharedModule {}
