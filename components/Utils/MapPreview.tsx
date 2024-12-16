export interface LocationProps {
  lat: number;
  lng: number;
}

export function mapPreview({ lat, lng }: LocationProps): string {
  let url = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${lng}&key=${process.env.EXPO_PUBLIC_API_MAP_KEY}`
  return url
}

export async function getAddressFromLocation({ lat, lng }: LocationProps): Promise<string> {
  const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${process.env.EXPO_PUBLIC_API_MAP_KEY}`)
  const data = await response.json()
  if (!data.results) return 'No address found'
  return data.results[0].formatted_address
}
