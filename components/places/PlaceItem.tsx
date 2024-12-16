import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Place } from '../../models/place';
import { Colors } from '@/constants/Colors';

interface PlaceItemProps {
  place: Place
  onSelect: () => void
}

function PlaceItem({ place, onSelect }: PlaceItemProps) {
  return (
    <Pressable onPress={onSelect} style={({ pressed }) => [styles.item, pressed && styles.pressed]}>
      <Image source={{ uri: place.imageUri ?? '' }} style={styles.image} />
      <View style={styles.containerInfo}>
        <Text style={styles.title}>{place.title}</Text>
        <Text style={styles.address}>{place.address}</Text>
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
  },
  item: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderRadius: 6,
    marginVertical: 12,
    backgroundColor: Colors.primary400,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4
  },
  pressed: {
    opacity: 0.9,

  },
  image: {
    flex: 1,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    height: 100,
  },
  containerInfo: {
    flex: 2,
    padding: 10
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.gray700
  },
  address: {
    fontSize: 12,
    color: Colors.gray700
  }
})