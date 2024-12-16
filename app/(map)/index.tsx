import MapScreen from "@/screens/Map";
import { useLocalSearchParams } from 'expo-router'

export default function Map() {
  const { lat, lng, isReadOnly: isReadOnlyParam } = useLocalSearchParams();
  const latitude = Array.isArray(lat) ? parseFloat(lat[0]) : parseFloat(lat);
  const longitude = Array.isArray(lng) ? parseFloat(lng[0]) : parseFloat(lng);

  const isReadOnly = Array.isArray(isReadOnlyParam) ? isReadOnlyParam[0] : isReadOnlyParam;

  return (
    <MapScreen latitude={latitude} longitude={longitude} isReadOnly={isReadOnly} />
  )
}