import { Button, Text, View } from "react-native"
import { useRouter } from 'expo-router'
import PlaceDetailsScreen from "@/screens/PlaceDetail"


export default function PlaceDetails() {
  const router = useRouter()
  return (
    // <View>
    //   <Text>From Places details</Text>
    //   <Button title="Go back to index" onPress={() => router.push('/(places)')} />
    //   <Button title="Go to map" onPress={() => router.push('/(map)')} />
    // </View>
    <PlaceDetailsScreen />
  )
}

