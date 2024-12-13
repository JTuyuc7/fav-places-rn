// import AllPlacesScreen from "@/screens/AllPlacesScreen"
import { Text, View, Button } from "react-native"
import { useRouter } from "expo-router"
import AddPlaceForm from "@/components/places/PlaceForm"

export default function AddPlaceScreen() {
  const router = useRouter()
  return (
    <>
      <AddPlaceForm />
    </>
  )
}
