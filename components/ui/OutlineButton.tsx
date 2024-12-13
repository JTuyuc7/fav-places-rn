import { Pressable, StyleSheet, Text } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { Colors } from "@/constants/Colors";

interface OutlineButtonProps {
  onPress: () => void;
  color: string
  size?: number;
  children: React.ReactNode
  iconName: React.ComponentProps<typeof Ionicons>['name'];
}

function OutlineButton({ onPress, iconName, children, size = 18, color = Colors.primary100 }: OutlineButtonProps) {
  return (
    <Pressable style={({ pressed }) => [styles.button, pressed && styles.pressed]} onPress={onPress}>
      <Ionicons style={styles.icon} name={iconName} size={size} color={color} />
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  )
}

export default OutlineButton;

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.primary100,
    flexDirection: 'row',
    borderRadius: 5,
  },
  pressed: {
    opacity: 0.7,

  },
  icon: {
    marginRight: 5,
  },
  text: {
    color: Colors.primary100,
    fontSize: 16,
    // fontWeight: 'bold'
  }
})