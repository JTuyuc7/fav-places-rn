// import AllPlacesScreen from "@/screens/AllPlacesScreen"
import { Text, View, Button } from "react-native"
import { useRouter } from "expo-router"
import AllPlacesScreen from "@/screens/AllPlacesScreen"
import FloatButton from "@/components/ui/FloatButton"
import { Colors } from "@/constants/Colors"

export default function AllPlaces() {
  const router = useRouter()
  const handleNavigation = () => {
    router.navigate('/(place)')
  }
  return (
    <>
      <AllPlacesScreen />
      <FloatButton iconName="add-circle" color={Colors.primary800} size={25} onPress={handleNavigation} />
    </>
  )
}
