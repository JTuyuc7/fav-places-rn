// import AllPlacesScreen from "@/screens/AllPlacesScreen"
import { Text, View, Button } from "react-native"
import { useRouter } from "expo-router"
import PlacesList from "@/components/places/PlacesList"

export default function AllPlacesScreen() {
  const router = useRouter()
  return (
    <>
      <PlacesList places={[]} />
    </>
  )
}
