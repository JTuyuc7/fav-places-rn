import { Colors } from "@/constants/Colors";
import { StyleProp, ViewStyle } from "react-native";
import { Pressable, StyleSheet, Text } from "react-native";

interface ButtonProps {
  children: React.ReactNode;
  onPress: () => void;
  customStyle?: StyleProp<ViewStyle>;
  // style?: any;
}

function Button({ children, onPress, customStyle }: ButtonProps) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [styles.button, pressed && styles.pressed, customStyle]}>
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
    paddingHorizontal: 12,
    margin: 5,
    elevation: 2,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 2,
  },
  text: {
    color: Colors.primary50,
    textAlign: 'center',
    fontSize: 16,

  },
  pressed: {
    opacity: 0.7
  }
})