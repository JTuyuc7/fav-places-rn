import IconButton from '@/components/ui/IconButton'
import { Colors } from '@/constants/Colors'
import { Stack } from 'expo-router'
import { useRouter } from 'expo-router'

export default function PlaceLayout() {
  const router = useRouter()
  return (
    <>
      <Stack
        screenOptions={{
          title: 'Map Place',
          headerShown: true,
          headerLeft: ({ tintColor }) => <IconButton iconName="arrow-back" size={22} color={tintColor} onPress={() => router.back()} />,
          headerStyle: { backgroundColor: Colors.primary500 },
          headerTintColor: Colors.gray700,
          contentStyle: { backgroundColor: Colors.primary700 }
        }}
      />
    </>
  )
}