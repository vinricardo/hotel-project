import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  endpoints = {
    getHotels: () => 'get-hotels',
    getFile: () => 'files',
  };

  constructor(private http: HttpClient) {}

  get hotels() {
    return this.http.get<any>(
      `${environment.server}${this.endpoints.getHotels()}`
    );
  }

  findFile(filePath: string, hotelId: number) {
    return this.http.get<any>(
      `${environment.server}${this.endpoints.getFile()}`,
      {
        params: { filePath, hotelId },
      }
    );
  }
}
