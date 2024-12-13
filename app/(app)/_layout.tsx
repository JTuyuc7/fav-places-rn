import IconButton from '@/components/ui/IconButton'
import { Colors } from '@/constants/Colors'
import { Stack } from 'expo-router'
import { useRouter } from 'expo-router'

export default function Applayout() {
  const router = useRouter()
  return (
    <>
      <Stack
        screenOptions={{
          title: 'Your Favorite Places',
          headerShown: true,
          headerRight: ({ tintColor }) => <IconButton iconName="add-circle" size={30} color={tintColor} onPress={() => router.push('/(place)')} />,
          headerStyle: { backgroundColor: Colors.primary500 },
          headerTintColor: Colors.gray700,
          contentStyle: { backgroundColor: Colors.primary700 }
        }}
      />
    </>
  )
}