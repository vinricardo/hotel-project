import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as leaflet from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit, OnChanges {
  private map!: leaflet.Map;
  @Input() options: any;
  constructor() {}

  initMap(): void {
    this.map = leaflet.map('map', this.options);
    const tiles = leaflet.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 18,
        minZoom: 3,
      }
    );
    tiles.addTo(this.map);
  }

  ngOnInit(): void {
    this.initMap();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['options'].firstChange) {
      this.map.remove();
      this.initMap();
    }
  }
}
