import { NativeSyntheticEvent, ScrollView, StyleSheet, Text, TextInput, TextInputChangeEventData, View } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useContext, useEffect, useState } from "react";
import { Colors } from "@/constants/Colors";
import ImagePicker from "../Utils/ImagePicker";
import LocationPicker from "../Utils/LocationPicker";
import Button from "../ui/Button";
import { getAddressFromLocation, LocationProps } from "../Utils/MapPreview";
import { Place, PlaceProps } from "@/models/place";
import { insertPlace } from "../Utils/DB";
import { PlaceContext } from "@/store/place-context";

function AddPlaceForm() {
  const router = useRouter();
  const { lat, lng } = useLocalSearchParams();
  // Todo: Do we need this?
  const { singlePlace, updatePlaceObject } = useContext(PlaceContext);

  const [placeName, setPlaceName] = useState<string>("");
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [selectedLocation, setSelectedLocation] = useState<LocationProps>({ lat: lat ? parseFloat(lat as string) : 0, lng: lng ? parseFloat(lng as string) : 0 });
  const [invalidForm, setInvalidForm] = useState<boolean>(false);
  const [humanAddress, setHumanAddress] = useState<string>("");

  // TODO: If needed, find a way to save the changes if moving from screens
  // let placeData: PlaceProps = {
  //   id: '',
  //   title: placeName,
  //   imageUri: selectedImage,
  //   address: humanAddress,
  //   lat: selectedLocation.lat,
  //   lng: selectedLocation.lng
  // }
  // console.log("🚀 ~ AddPlaceForm ~ placeData:", placeData)

  // useEffect(() => {
  //   if (singlePlace) {
  //     setPlaceName(singlePlace.title);
  //     setSelectedImage(singlePlace.imageUri);
  //     setSelectedLocation({ lat: singlePlace.lat, lng: singlePlace.lng });
  //     setHumanAddress(singlePlace.address);
  //   }
  // }, [])

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
    const place = new Place(tempId, placeName, selectedImage, humanAddress, selectedLocation.lat, selectedLocation.lng);

    try {
      await insertPlace(place as PlaceProps);
      // TODO: validate if we are coming from the map, we should call navigate to the home screen and not to the map screen.
      router.back()
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

  function handleCancel() {
    // TODO: investigate why the replace does not remove the arrow in the top left header
    router.back()
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

        <View style={styles.actions}>
          <Button customStyle={{ marginTop: 30, marginBottom: 30 }} onPress={handleCancel} iconName="close-circle-outline" size={26} color={Colors.primary100}>Cancel</Button>
          <Button customStyle={{ marginTop: 30, marginBottom: 30 }} onPress={savePlaceHandler} iconName="checkmark-circle" size={26} color={Colors.primary100}>Add Place</Button>
        </View>
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
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    // width: '100%',
    alignItems: 'center',
    marginTop: 20
  }
})