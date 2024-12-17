import IconButton from '@/components/ui/IconButton'
import { Colors } from '@/constants/Colors'
import { Stack } from 'expo-router'
import { useRouter } from 'expo-router'
import { useLayoutEffect } from 'react'
import { View } from 'react-native'

export default function Applayout() {
  const router = useRouter()

  const handleNavigation = () => {
    console.log('icon pressed');
    router.push('/(place)');
  };

  return (
    <>
      <Stack
        screenOptions={{
          title: 'Your Favorite Places',
          headerShown: true,
          headerLeft: () => null,
          // headerRight: ({ tintColor }) => <IconButton iconName="add-circle" size={30} color={tintColor} onPress={() => router.push('/(place)')} />,
          headerStyle: { backgroundColor: Colors.primary500 },
          headerTintColor: Colors.gray700,
          contentStyle: { backgroundColor: Colors.primary700 }
        }}
      />
    </>
  )
}