import { StyleSheet, Text, View } from "react-native";
import theme from "../theme";

const NumberContainer = (props: { children: any }) => {
  return (
    <View style={syles.container}>
      <Text style={syles.numberText}>{props.children}</Text>
    </View>
  );
};

export default NumberContainer;

const syles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: theme.Colors.secondary,
    padding: 24,
    margin: 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: theme.Colors.white,
    fontSize: theme.FontSize.boldInput,
  },
});
