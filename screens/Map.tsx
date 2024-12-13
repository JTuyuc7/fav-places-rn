import { Button, Text, View } from "react-native";

import { useRouter } from 'expo-router';

export default function MapScreen() {
  const router = useRouter()
  return (
    <View>
      <Text>From Map App</Text>
      <Button title="Go to main page" onPress={() => router.push('/(app)')} />
    </View>
  )
}