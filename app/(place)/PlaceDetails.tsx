import { StyleSheet, View } from "react-native"
import { useLocalSearchParams, useNavigation } from 'expo-router'
import PlaceDetailsScreen from "@/screens/PlaceDetail"

import { useEffect, useState } from "react";
import { fetchPlaceDetails } from "@/components/Utils/DB";
import { PlaceProps } from "@/models/place";
import { ActivityIndicator } from "react-native";

export default function PlaceDetails() {
  const [placeDetails, setPlaceDetails] = useState<PlaceProps>({} as PlaceProps)
  const navigation = useNavigation()
  const { id } = useLocalSearchParams()

  useEffect(() => {
    async function fetchData() {
      const singlePlace = await fetchPlaceDetails(id as any)
      setPlaceDetails(singlePlace)
      navigation.setOptions({ title: singlePlace.title })
    }
    // const singlePlace = fetchPlaceDetails(id as any)
    fetchData()
  }, [id])

  if (!placeDetails) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
      </View>
    )
  }

  return (
    <PlaceDetailsScreen singlePlace={placeDetails} />
  )
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})