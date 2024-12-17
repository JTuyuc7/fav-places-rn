import { Pressable, StyleSheet, StyleProp, ViewStyle } from "react-native";
import { Ionicons } from '@expo/vector-icons';

interface IconButtonProps {
  iconName: React.ComponentProps<typeof Ionicons>['name'];
  size: number;
  color?: string;
  onPress: () => void;
  customStyle?: StyleProp<ViewStyle>;
}

function IconButton({ iconName, size, color, onPress, customStyle }: IconButtonProps) {
  return (
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
  );
}

export default IconButton;

const styles = StyleSheet.create({
  button: {
    // padding: 8, // Maintain padding for visible spacing
    // margin: 5,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    display: 'flex',
    flexDirection: 'row',
  },
  pressed: {
    opacity: 0.5, // Adds a visual feedback on press
  },
});
