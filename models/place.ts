import { LocationProps } from "@/components/Utils/MapPreview";

export interface PlaceProps {
  id: number | string;
  title: string;
  imageUri: string;
  address: string;
  location: LocationProps;
}

export class Place {
  id: number | string;
  title: string;
  imageUri: string;
  address: string;
  location: LocationProps;

  constructor(
    id: number | string,
    title: string,
    imageUri: string,
    address: string,
    location: LocationProps,
  ) {
    this.id = id ?? new Date().toString() + Math.random().toString()
    this.title = title
    this.imageUri = imageUri
    this.address = address
    this.location = location
  }
}
