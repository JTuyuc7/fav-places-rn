import { Colors } from '@/constants/Colors'
import { Stack } from 'expo-router'
import { useRouter } from 'expo-router'

export default function PlaceLayout() {
  const router = useRouter()
  return (
    <>
      <Stack
        screenOptions={{
          title: 'Location',
          headerShown: true,
          // headerLeft: ({ tintColor }) => <IconButton iconName="arrow-back" size={22} color={tintColor} onPress={() => router.back()} />,
          headerStyle: { backgroundColor: Colors.primary500 },
          headerTintColor: Colors.gray700,
          contentStyle: { backgroundColor: Colors.primary700 }
        }}
      />
    </>
  )
}