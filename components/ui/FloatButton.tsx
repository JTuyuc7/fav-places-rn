import { Pressable, StyleProp, StyleSheet, TouchableOpacity, ViewStyle } from "react-native"
import { Ionicons } from '@expo/vector-icons';
import { View } from "react-native"
import { Colors } from "@/constants/Colors";

interface FloatButtonInterface {
  iconName: React.ComponentProps<typeof Ionicons>['name'];
  size: number;
  color?: string;
  onPress: () => void;
  customStyle?: StyleProp<ViewStyle>;
}

function FloatButton({ iconName, size, color, customStyle, onPress }: FloatButtonInterface) {

  return (
    <View style={styles.floatContainer}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          customStyle,
          pressed && styles.pressed,
        ]}
        onPress={onPress}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }} // Expands touchable area
      >
        <Ionicons name={iconName} size={size} color={color} />
      </Pressable>
    </View>
  )
}

export default FloatButton

const styles = StyleSheet.create({
  floatContainer: {
    position: 'absolute',
    width: 50,
    backgroundColor: Colors.primary100,
    bottom: 50,
    right: 10,
    borderRadius: 25,
    opacity: 0.9,
    // shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  button: {
    padding: 8, // Maintain padding for visible spacing
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressed: {
    opacity: 0.5, // Adds a visual feedback on press
  },
});
