import { Button, Image, ScrollView, StyleSheet, Text, View } from "react-native"
import { useNavigation, useRouter } from 'expo-router'
import OutlineButton from "@/components/ui/OutlineButton"
import { Colors } from "@/constants/Colors"
import { PlaceProps } from "@/models/place"

interface PlaceDetailsScreenProps {
  singlePlace: PlaceProps
}

export default function PlaceDetailsScreen({ singlePlace }: PlaceDetailsScreenProps) {
  const navigation = useNavigation<any>()
  const router = useRouter()
  let locationObject = {
    lat: singlePlace.lat,
    lng: singlePlace.lng
  }

  // console.log(singlePlace, 'from PlaceDetailsScreen')
  // console.log(singlePlace.location, 'from PlaceDetailsScreen')
  // console.log(typeof singlePlace.location, 'from PlaceDetailsScreen')

  const openOnMapHandler = () => {
    router.navigate({ pathname: '/(map)', params: { ...locationObject, isReadOnly: 'true' } })
  }

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: singlePlace.imageUri }} />
      <View style={styles.locationContainer}>
        <View style={styles.addressContainer}>

          <Text style={styles.address}>{singlePlace.address}</Text>
        </View>

        <OutlineButton iconName="map-outline" onPress={openOnMapHandler} size={22} color={Colors.primary800}>View on Map</OutlineButton>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  screen: {
    alignItems: 'center',
  },
  image: {
    height: '35%',
    minHeight: 300,
    width: '100%',
  },
  locationContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  addressContainer: {
    padding: 20,
  },
  address: {
    color: Colors.primary800,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 17,
  }
})