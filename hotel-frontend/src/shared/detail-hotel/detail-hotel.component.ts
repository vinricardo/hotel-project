import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-hotel',
  templateUrl: './detail-hotel.component.html',
  styleUrls: ['./detail-hotel.component.scss']
})
export class DetailHotelComponent implements OnInit {
  moreInfo: boolean = false;
  tabs: string[] = ['Overview', 'Facilities', 'Details', 'Reviews']
  activeTab = this.tabs[0];
  constructor() { }

  ngOnInit(): void {
  }

  readMore(){
    this.moreInfo = !this.moreInfo
    let div = document.getElementById("info")!;
    this.moreInfo ?
      div.style.maxHeight= '100rem':
      div.style.maxHeight= '80px';
  }

  setTab(tab: string){
    this.activeTab = tab;
  }

  checkActiveTab(tab: string):boolean{
    return this.activeTab != tab;
  }
}
