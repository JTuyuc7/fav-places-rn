export interface LocationProps {
  lat: number;
  lng: number;
}

export function mapPreview({ lat, lng }: LocationProps): string {
  let url = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${lng}&key=${process.env.EXPO_PUBLIC_API_MAP_KEY}`
  return url
}
