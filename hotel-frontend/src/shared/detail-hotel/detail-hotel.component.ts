import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { environment } from 'src/environments/environment';

import { Hotel, Pictures } from '../models/hotel.model';

@Component({
  selector: 'app-detail-hotel',
  templateUrl: './detail-hotel.component.html',
  styleUrls: ['./detail-hotel.component.scss'],
})
export class DetailHotelComponent implements OnInit, OnChanges {
  moreInfo: boolean = false;
  @Input() hotel!: Hotel;
  tabs: string[] = ['Overview', 'Facilities', 'Details', 'Reviews'];
  activeTab = this.tabs[0];
  profilePicture!: Pictures;
  othersPictures!: Pictures[];
  endpointBackend = environment.server;
  constructor() {}

  ngOnInit(): void {}

  setTab(tab: string) {
    this.activeTab = tab;
  }

  checkActiveTab(tab: string): boolean {
    return this.activeTab != tab;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!changes['hotel'].firstChange) {
      let pictures: Pictures[] = JSON.parse(
        JSON.stringify(this.hotel.pictures)
      );

      this.profilePicture = pictures.filter((picture) => picture.profile)[0];
      this.othersPictures = pictures.filter((picture) => !picture.profile);
    }
  }
}
