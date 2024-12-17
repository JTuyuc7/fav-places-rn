import { Place } from "@/models/place";
import { FlatList, StyleSheet, Text, View } from "react-native";
import PlaceItem from "./PlaceItem";
import { useRouter } from "expo-router";
import Button from "../ui/Button";
import { Colors } from "@/constants/Colors";

interface PlacesListProps {
  places: Place[]
}


function PlacesList({ places }: PlacesListProps) {
  const router = useRouter()

  const openPlaceDetailHandler = (id: number) => {
    router.navigate({ pathname: '/(place)/PlaceDetails', params: { id } })
  }

  if (places.length === 0) {
    return (
      <View style={styles.fallbackContainer}>
        <Text style={styles.fallbackText} >No places found, maybe start adding some!</Text>
        <Button customStyle={{ marginTop: 30, marginBottom: 30 }} onPress={() => router.push('/(place)')} iconName="add-circle" size={26} color={Colors.primary100}>Add</Button>
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