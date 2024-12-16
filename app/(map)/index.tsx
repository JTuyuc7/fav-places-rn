import MapScreen from "@/screens/Map";
import { Button, Text, View } from "react-native";
import { useLocalSearchParams, useRouter } from 'expo-router'
import { LocationProps } from "@/components/Utils/MapPreview";


export default function Map() {
  const router = useRouter()
  const { lat, lng } = useLocalSearchParams();
  const latitude = Array.isArray(lat) ? parseFloat(lat[0]) : parseFloat(lat);
  const longitude = Array.isArray(lng) ? parseFloat(lng[0]) : parseFloat(lng);

  return (
    <MapScreen latitude={latitude} longitude={longitude} />
  )
}