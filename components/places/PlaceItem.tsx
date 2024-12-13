import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Place } from '../../models/place';

interface PlaceItemProps {
  place: Place
  onSelect: () => void
}

function PlaceItem({ place, onSelect }: PlaceItemProps) {
  return (
    <Pressable onPress={onSelect}>
      <Image source={{ uri: place.imageUri ?? '' }} style={{ width: 100, height: 100 }} />
      <View>
        <Text> Title : {place.title}</Text>
        <Text>Address : {place.address}</Text>
      </View>
    </Pressable>
  )
}

export default PlaceItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})