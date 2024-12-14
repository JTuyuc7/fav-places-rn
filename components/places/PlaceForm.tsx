import { Button, NativeSyntheticEvent, ScrollView, StyleSheet, Text, TextInput, TextInputChangeEventData, View } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Colors } from "@/constants/Colors";
import ImagePicker from "../Utils/ImagePicker";
import LocationPicker from "../Utils/LocationPicker";

function AddPlaceForm() {
  const router = useRouter();
  const [placeName, setPlaceName] = useState<string>("");
  const [placeDescription, setPlaceDescription] = useState<string>("");
  const [placeImage, setPlaceImage] = useState<string>("");
  const [placeLatitude, setPlaceLatitude] = useState<number>(0);
  const [placeLongitude, setPlaceLongitude] = useState<number>(0);

  function changeTitleHandle(text: NativeSyntheticEvent<TextInputChangeEventData>) {
    setPlaceName(text.nativeEvent.text);
  }

  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}>Place Name</Text>
        <TextInput keyboardType="default" style={styles.input} onChange={changeTitleHandle} value={placeName} />

        <ImagePicker />
        <LocationPicker />
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
  }
})