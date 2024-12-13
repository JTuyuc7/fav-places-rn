// import AllPlacesScreen from "@/screens/AllPlacesScreen"
import { Text, View, Button } from "react-native"
import { useRouter } from "expo-router"
import AllPlacesScreen from "@/screens/AllPlacesScreen"

export default function AllPlaces() {
  const router = useRouter()
  return (
    <>
      <AllPlacesScreen />
    </>
  )
}
