export interface ButtonPropsI {
  variant?: "primary" | "secondary" | "danger" | "white";
  children: React.ReactNode;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<ViewStyle>;
  onPress?: (event: GestureResponderEvent) => void;
}
