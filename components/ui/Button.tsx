import { Colors } from "@/constants/Colors";
import { StyleProp, ViewStyle } from "react-native";
import { Pressable, StyleSheet, Text } from "react-native";
import { Ionicons } from '@expo/vector-icons'


interface ButtonProps {
  children: React.ReactNode;
  onPress: () => void;
  customStyle?: StyleProp<ViewStyle>;
  // style?: any;
  iconName?: string;
  size?: number;
  color?: string;
}

function Button({ children, onPress, customStyle, iconName, size, color }: ButtonProps) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [styles.button, pressed && styles.pressed, customStyle]}>
      {iconName && (
        <Ionicons style={styles.icon} name={iconName as any} size={size} color={color} />
      )}
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  )
}

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary800,
    padding: 10,
    borderRadius: 5,
    paddingHorizontal: 18,
    margin: 5,
    elevation: 2,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 2,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: Colors.primary100,
  },
  text: {
    color: Colors.primary50,
    textAlign: 'center',
    fontSize: 16,
    // textTransform: 'uppercase',
  },
  pressed: {
    opacity: 0.7
  },
  icon: {
    marginRight: 5,
  }
})