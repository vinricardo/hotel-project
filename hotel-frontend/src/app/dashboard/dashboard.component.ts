import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Hotel } from 'src/shared/models/hotel.model';

import { DashboardService } from './service/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  hotelsTabs: string[] = ['Most Popular', 'Special Ofers', 'Near Me'];
  activeTab: string = this.hotelsTabs[0];
  dropdownActive: boolean = false;
  rangeValue!: string;
  hotels$!: Observable<Hotel[]>;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.findHotels();
  }

  findHotels() {
    this.hotels$ = this.dashboardService.hotels;
  }

  setTab(tab: string) {
    this.activeTab = tab;
  }

  getAction(event: any) {
    this.dropdownActive = event;
  }

  getValue(event: any) {
    this.rangeValue = event;
  }

  openDropdown() {
    this.dropdownActive = !this.dropdownActive;
  }

  checkActiveTab(tab: string): boolean {
    return this.activeTab != tab;
  }
}
