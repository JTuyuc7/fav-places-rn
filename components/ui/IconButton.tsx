import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons'

interface IconButtonProps {
  iconName: React.ComponentProps<typeof Ionicons>['name'];
  size: number;
  color?: string;
  onPress: () => void;
}


function IconButton({ iconName, size, color, onPress }: IconButtonProps) {
  console.log('pressed*-*-*-*')
  return (
    <>
      <Pressable style={({ pressed }) => [styles.pressed, pressed && styles.pressed]} onPress={onPress}>
        <Ionicons name={iconName} size={size} color={color} />
      </Pressable>
    </>
  )
}

export default IconButton;

const styles = StyleSheet.create({
  button: {
    padding: 8,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressed: {
    opacity: 0.5
  }
})