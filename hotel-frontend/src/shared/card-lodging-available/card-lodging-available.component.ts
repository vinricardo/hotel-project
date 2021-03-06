import { Component, Input, OnInit } from '@angular/core';

import { Hotel, Pictures } from '../models/hotel.model';
import { environment } from './../../environments/environment';

@Component({
  selector: 'app-card-lodging-available',
  templateUrl: './card-lodging-available.component.html',
  styleUrls: ['./card-lodging-available.component.scss'],
})
export class CardLodgingAvailableComponent implements OnInit {
  @Input() hotel!: Hotel;
  pictureProfile!: Pictures;
  endpointBackend = environment.server;
  constructor() {}

  ngOnInit(): void {
    let pictures: Pictures[] = JSON.parse(JSON.stringify(this.hotel.pictures));
    this.pictureProfile = pictures.filter((picture) => picture.profile)[0];
  }
}
