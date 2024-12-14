import { Button, Text, View } from "react-native";
import MapView, { Marker } from 'react-native-maps';

import { useRouter } from 'expo-router';
// import MapboxGL from '@rnmapbox/maps';

// MapboxGL.setAccessToken(process.env.EXPO_PUBLIC_MBOX_API_KEY ?? '')
export interface MapScreenProps {
  latitude: number;
  longitude: number;
  latitudeDelta?: number;
  longitudeDelta?: number;
}

export default function MapScreen({ latitude, longitude, latitudeDelta = 0.0922, longitudeDelta = 0.0421 }: MapScreenProps): JSX.Element {
  const router = useRouter()
  console.log(latitude, longitude)
  return (
    <View>
      {/* <MapView style={{ flex: 1 }} initialRegion={{
        latitude: 37.78,
        longitude: -122.43,
        latitudeDelta: latitudeDelta,
        longitudeDelta: longitudeDelta
      }}>
      </MapView> */}
      {/* <MapboxGL.MapView style={{ flex: 1 }}>
        <MapboxGL.Camera
          zoomLevel={14}
          centerCoordinate={[longitude, latitude]} // Longitude, Latitude
        />
      </MapboxGL.MapView> */}
      <Text>Map Screen comming soon...</Text>
    </View>
  )
}