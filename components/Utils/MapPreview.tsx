import Constants from 'expo-constants'

export interface LocationProps {
  lat: number;
  lng: number;
}

const API_MAP_KEY = Constants.expoConfig?.extra ? Constants.expoConfig.extra.API_MAP_KEY : ''

//* Development only
// let google_api_key = process.env.EXPO_PUBLIC_API_MAP_KEY

// Production
// let google_api_key = process.env.API_MAP_KEY

export function mapPreview({ lat, lng }: LocationProps): string {
  let url = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${lng}&key=${API_MAP_KEY}`
  return url
}

export async function getAddressFromLocation({ lat, lng }: LocationProps): Promise<string> {
  const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${API_MAP_KEY}`)
  const data = await response.json()
  if (!data.results) return 'No address found'
  return data.results[0].formatted_address
}
