import { Place } from "@/models/place";
import { FlatList, StyleSheet, Text, View } from "react-native";
import PlaceItem from "./PlaceItem";

interface PlacesListProps {
  places: Place[]
}


function PlacesList({ places }: PlacesListProps) {

  if (places.length === 0) {
    return (
      <View style={styles.fallbackContainer}>
        <Text style={styles.fallbackText} >No places found, maybe start adding some!</Text>
      </View>
    )
  }

  return (
    <View>
      <Text>Places List</Text>

      <FlatList
        data={places}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PlaceItem place={item} onSelect={() => console.log('item pressed' + item.id)} />}
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
  }
})