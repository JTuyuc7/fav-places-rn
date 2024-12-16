import { Place } from "@/models/place";
import { FlatList, StyleSheet, Text, View } from "react-native";
import PlaceItem from "./PlaceItem";
import { Button } from "react-native";
import { useRouter } from "expo-router";

interface PlacesListProps {
  places: Place[]
}


function PlacesList({ places }: PlacesListProps) {
  const router = useRouter()

  const openPlaceDetailHandler = (id: number) => {
    // router.push(`/(place)/PlaceDetails/${id}` as any)
    router.navigate({ pathname: '/(place)/PlaceDetails', params: { id } })
  }

  if (places.length === 0) {
    return (
      <View style={styles.fallbackContainer}>
        <Text style={styles.fallbackText} >No places found, maybe start adding some!</Text>
        <Button title="Add Place" onPress={() => router.push('/(place)')} />
      </View>
    )
  }

  return (
    <View>
      <FlatList
        style={styles.list}
        data={places}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <PlaceItem place={item} onSelect={() => openPlaceDetailHandler(item.id as any)} />}
      />
    </View>
  );
}

export default PlacesList;

const styles = StyleSheet.create({
  fallbackContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  fallbackText: {
    fontSize: 18
  },
  list: {
    margin: 24
  }
})