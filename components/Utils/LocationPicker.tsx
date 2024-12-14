import { Alert, Image, StyleSheet, Text, View } from "react-native";
import OutlineButton from "../ui/OutlineButton";
import { useRouter } from 'expo-router'
import { Colors } from "@/constants/Colors";
import { getCurrentPositionAsync, useForegroundPermissions, PermissionStatus } from 'expo-location'
import { useState } from "react";
import { LocationProps, mapPreview } from "./MapPreview";

function LocationPicker() {
  const router = useRouter();
  const [locationObject, setLocationObject] = useState<LocationProps>({ lat: 0, lng: 0 });
  const [locationPermissionInformation, requestedPermission] = useForegroundPermissions();

  const verifyPermissions = async (): Promise<boolean> => {

    if (locationPermissionInformation?.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestedPermission();
      return permissionResponse.granted
    }

    if (locationPermissionInformation?.status === PermissionStatus.DENIED) {
      Alert.alert('Permission Denied', 'You need to grant location permissions to use this app', [{ text: 'Okay' }]);
      return false;
    }

    return true;
  }

  const getLocationHandler = async (): Promise<void> => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) return;

    const location = await getCurrentPositionAsync();
    setLocationObject({
      lat: location.coords.latitude,
      lng: location.coords.longitude
    })
  }

  const pickOnMapHandler = () => {
    // TODO: Find another alternative to render the map
    //* see https://github.com/rnmapbox/maps?tab=readme-ov-file
    router.push({ pathname: '/(map)', params: { ...locationObject } });
  }

  let imagePreview = <Text>No location preview.</Text>;
  if (locationObject && locationObject.lat && locationObject.lng) {
    imagePreview = <Image source={{ uri: mapPreview(locationObject) }} style={styles.imagePreview} />
  }

  return (
    <>
      <View>
        <View style={styles.mapPreview}>
          {imagePreview}
        </View>
        <View style={styles.actions}>
          <OutlineButton iconName="location" size={19} color={Colors.primary100} onPress={getLocationHandler}>Locate User</OutlineButton>
          <OutlineButton iconName="map-outline" size={19} color={Colors.primary100} onPress={pickOnMapHandler}>Pick on Map</OutlineButton>
        </View>
      </View>
    </>
  )
}

export default LocationPicker;

const styles = StyleSheet.create({
  mapPreview: {
    width: '100%',
    height: 200,
    marginVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary100,
    borderRadius: 5,
    overflow: 'hidden'
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    // width: '100%',
    alignItems: 'center'
  },
  imagePreview: {
    width: '100%',
    height: '100%'
  }
})