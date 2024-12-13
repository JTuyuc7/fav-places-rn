import { Button, Text, View } from "react-native"
import { useRouter } from 'expo-router'


export default function PlaceDetailsScreen() {
  const router = useRouter()
  return (
    <View>
      <Text>From Places</Text>
      <Button title="Go to Map Updated" onPress={() => router.push('/(map)')} />
    </View>
  )
}

