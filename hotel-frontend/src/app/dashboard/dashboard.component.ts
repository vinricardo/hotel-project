import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  hotelsTabs: string[]= [
    'Most Popular',
    'Special Ofers',
    'Near Me'
  ]
  activeTab: string = this.hotelsTabs[0];
  constructor() { }

  ngOnInit(): void {
  }

  setTab(tab: string){
    this.activeTab = tab;
  }

  checkActiveTab(tab: string):boolean{
    return this.activeTab != tab;
  }

}
