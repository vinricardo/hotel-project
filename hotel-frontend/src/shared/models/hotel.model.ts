export interface Hotel {
  id: number;
  name: string;
  price: string;
  details: string;
  description: string;
  facilities: string;
  createdAt: Date;
  updatedAt: Date;
  location: Location;
  reviews: any[];
  pictures: Pictures[];
}

export interface Location {
  id: number;
  longitude: number;
  latitude: number;
  hotelId: number;
}

export interface Pictures {
  id: number;
  url: string;
  profile: boolean;
  hotelId: number;
}
