import { LocationProps } from "@/components/Utils/MapPreview";

export interface PlaceProps {
  id: number | string;
  title: string;
  imageUri: string;
  address: string;
  // location: { lat: number; lng: number };
  lat: number;
  lng: number;
}

export class Place {
  id: number | string;
  title: string;
  imageUri: string;
  address: string;
  // location: { lat: number; lng: number } = { lat: 0, lng: 0 };
  lat: number = 0;
  lng: number = 0;

  constructor(
    id: number | string,
    title: string,
    imageUri: string,
    address: string,
    // location: LocationProps,
    lat: number,
    lng: number
  ) {
    this.id = id ?? new Date().toString() + Math.random().toString()
    this.title = title
    this.imageUri = imageUri
    this.address = address
    this.lat = lat
    this.lng = lng
  }
}
