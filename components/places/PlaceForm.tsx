import { Alert, NativeSyntheticEvent, ScrollView, StyleSheet, Text, TextInput, TextInputChangeEventData, View } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { Colors } from "@/constants/Colors";
import ImagePicker from "../Utils/ImagePicker";
import LocationPicker from "../Utils/LocationPicker";
import Button from "../ui/Button";
import { getAddressFromLocation, LocationProps } from "../Utils/MapPreview";
import { Place, PlaceProps } from "@/models/place";
import { insertPlace } from "../Utils/DB";

function AddPlaceForm() {
  const router = useRouter();
  const { lat, lng } = useLocalSearchParams();

  const [placeName, setPlaceName] = useState<string>("");
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [selectedLocation, setSelectedLocation] = useState<LocationProps>({ lat: 0, lng: 0 });
  const [invalidForm, setInvalidForm] = useState<boolean>(false);
  const [humanAddress, setHumanAddress] = useState<string>("");

  function changeTitleHandle(text: NativeSyntheticEvent<TextInputChangeEventData>) {
    setPlaceName(text.nativeEvent.text);
  }

  async function savePlaceHandler() {

    if (!placeName || !selectedImage || !selectedLocation || !humanAddress) {
      setInvalidForm(true);
      setTimeout(() => {
        setInvalidForm(false);
      }, 3000)
      return;
    }

    let tempId = Math.random().toString();
    const place = new Place(tempId, placeName, selectedImage, humanAddress, selectedLocation);

    try {
      await insertPlace(place as PlaceProps);
      router.replace({ pathname: '/(app)' })
    } catch (error) {
      console.log('Error saving place', error)
    } finally {
      setPlaceName("");
      setSelectedImage("");
      setSelectedLocation({ lat: 0, lng: 0 });
      setHumanAddress("");
    }
  }

  function handleImageTaken(imagePath: string) {
    setSelectedImage(imagePath);
  }

  async function handleLocationPicked(location: LocationProps) {
    setSelectedLocation(location);
    setHumanAddress(await getAddressFromLocation(location))
  }

  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}>Place Name</Text>
        <TextInput keyboardType="default" style={styles.input} onChange={changeTitleHandle} value={placeName} />

        <ImagePicker onTakeImage={handleImageTaken} />
        <LocationPicker onPickLocation={handleLocationPicked} lat={lat ? parseFloat(lat as string) : undefined} lng={lng ? parseFloat(lng as string) : undefined} />

        {invalidForm && (
          <View style={styles.containerError}>
            <Text style={styles.errorText}>Please fill all the fields</Text>
          </View>
        )}

        <Button customStyle={{ marginTop: 30, marginBottom: 30 }} onPress={savePlaceHandler}>Add Place</Button>
      </View>
    </ScrollView>
  )
}

export default AddPlaceForm;

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24,

  },
  label: {
    fontWeight: "bold",
    marginBottom: 8,
    color: Colors.primary200,
    fontSize: 15
  },
  input: {
    marginVertical: 4,
    paddingHorizontal: 5,
    paddingVertical: 8,
    fontSize: 16,
    borderBottomColor: Colors.primary200,
    borderBottomWidth: 2,
    backgroundColor: Colors.primary100,
    color: Colors.primary800,
    borderRadius: 5,
    height: 40
  },
  containerError: {
    backgroundColor: 'rgba(255, 0, 0, 0.2)',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30

  },
  errorText: {
    color: Colors.primary100,
    fontWeight: 'bold'
  }
})