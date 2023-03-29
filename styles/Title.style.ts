import { StyleSheet } from "react-native";
import theme from "../theme";

const baseStyle = StyleSheet.create({
  base: {
    borderWidth: 3,
    padding: 20,
    borderRadius: 5,
    textAlign: "center",
    //fontFamily: "open-sans",
    maxWidth: "80%",
    alignSelf: "center",
    fontSize: theme.FontSize.boldInput,
  },
});

export const TitleStyles = StyleSheet.create({
  primaryTitle: {
    ...baseStyle.base,
    color: theme.Colors.primary,
    borderColor: theme.Colors.primary,
  },
  whiteTitle: {
    ...baseStyle.base,
    color: theme.Colors.white,
    borderColor: theme.Colors.white,
  },
  secondaryTitle: {
    ...baseStyle.base,
    color: theme.Colors.secondary,
    borderColor: theme.Colors.secondary,
  },
});
