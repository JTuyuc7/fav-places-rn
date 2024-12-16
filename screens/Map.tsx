import { Button, StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from 'react-native-maps';

import { useRouter } from 'expo-router';
import MapboxGL from '@rnmapbox/maps';
import { useState } from "react";
import { LocationProps } from "@/components/Utils/MapPreview";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

MapboxGL.setAccessToken(process.env.EXPO_PUBLIC_MBOX_API_KEY ?? '')
export interface MapScreenProps {
  latitude: number;
  longitude: number;
  latitudeDelta?: number;
  longitudeDelta?: number;
}

export default function MapScreen({ latitude, longitude, latitudeDelta = 0.0922, longitudeDelta = 0.0421 }: MapScreenProps): JSX.Element {
  const router = useRouter()
  const [location, setLocation] = useState<LocationProps>({ lat: 0, lng: 0 })

  const handlePress = (e: any) => {
    const lat = e.geometry.coordinates[1]
    const lng = e.geometry.coordinates[0]
    setLocation({ lat, lng })
  }

  const handleSave = () => {
    router.push({ pathname: "/(place)", params: { ...location } })
  }

  return (

    <View style={styles.mapContainer}>
      <MapboxGL.MapView style={{ flex: 1 }}
        projection='globe'
        onPress={handlePress}
      >
        <MapboxGL.Camera
          zoomLevel={14}
          centerCoordinate={[longitude, latitude]} // Longitude, Latitude
        />
        {location.lat !== 0 && location.lng !== 0 && (
          <MapboxGL.MarkerView coordinate={[location?.lng, location?.lat]}>
            <View style={styles.markerConatainer}>
              <View
                style={{
                  position: 'absolute',
                  // width: 150,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  left: 0,
                  right: 0,
                  top: -40,
                  height: 100
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: 'black',
                    position: 'relative',
                    bottom: -20,
                  }}
                >Picked location</Text>
              </View>
              <Ionicons name="location" size={25} color="red" />
            </View>
          </MapboxGL.MarkerView>
        )}
      </MapboxGL.MapView>
      {location.lat !== 0 && location.lng !== 0 && (
        <View
          style={{
            position: 'absolute',
            bottom: 50,
            width: '100%',
            display: 'flex',
            // justifyContent: 'flex-end',
            alignItems: 'flex-end',
            // backgroundColor: 'red',
            padding: 10,
            right: 0,
          }}
        >
          <Ionicons name="checkmark-circle" onPress={handleSave} size={55} color={Colors.primary700} />
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  mapContainer: {
    height: '100%',
    width: '100%',
  },
  markerConatainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 150,
  }
})