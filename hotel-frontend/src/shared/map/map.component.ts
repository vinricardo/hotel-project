import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as leaflet from 'leaflet';
import { tap } from 'rxjs';
import { DashboardService } from 'src/app/dashboard/service/dashboard.service';

import { Hotel } from './../models/hotel.model';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit, OnChanges {
  private map!: leaflet.Map;
  @Input() options: any;
  @Input() markers!: boolean;
  @Input() coordHotel!: any[];
  constructor(private dashboardService: DashboardService) {}

  initMap() {
    setTimeout(() => {
      this.map = leaflet.map('map', this.options);
      const tiles = leaflet.tileLayer(
        'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        {
          maxZoom: 18,
          minZoom: 3,
        }
      );
      tiles.addTo(this.map);
    }, 100);
  }

  parseFloat(number: any) {
    return parseFloat(number);
  }

  ngOnInit(): void {
    this.initMap();
    this.addMarkers();
  }

  addMarkers() {
    if (this.markers) {
      setTimeout(() => {
        this.dashboardService.hotels
          .pipe(
            tap((hotels: Hotel[]) => {
              hotels.forEach((hotel) => {
                leaflet
                  .marker([
                    this.parseFloat(hotel.location.longitude),
                    this.parseFloat(hotel.location.latitude),
                  ])
                  .addTo(this.map)
                  .bindPopup(`${hotel.name}`);
              });
            })
          )
          .subscribe();
      }, 100);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['options'].firstChange) {
      this.map.remove();
      this.initMap();
      this.addMarkers();
    }
  }
}
