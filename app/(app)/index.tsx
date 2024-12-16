// import AllPlacesScreen from "@/screens/AllPlacesScreen"
import { Text, View, Button } from "react-native"
import { useLocalSearchParams, useRouter } from "expo-router"
import AllPlacesScreen from "@/screens/AllPlacesScreen"

export default function AllPlaces() {
  // console.log(route, 'navigation')
  // const { place } = useLocalSearchParams();
  // console.log("🚀 ~ AllPlaces ~ place:", place)
  const router = useRouter()
  return (
    <>
      <AllPlacesScreen />
    </>
  )
}
