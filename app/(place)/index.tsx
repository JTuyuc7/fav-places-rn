// import AllPlacesScreen from "@/screens/AllPlacesScreen"
import { Text, View, Button } from "react-native"
import { useRouter } from "expo-router"
import AddPlaceScreen from "@/screens/AddPlace"

export default function AddPlace() {
  const router = useRouter()
  return (
    <>
      <AddPlaceScreen />
    </>
  )
}
