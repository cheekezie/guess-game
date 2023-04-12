import { Pressable, StyleSheet, Text, View } from "react-native";
import { ButtonPropsI } from "../types/button";
import theme from "../theme";
import { useState } from "react";
import React from "react";

const Button = (props: ButtonPropsI) => {
  const [pressed, setPressed] = useState(false);
  const { children, buttonStyle, textStyle, onPress } = props;

  const pressHandler = () => {};
  return (
    <Pressable
      style={({ pressed }) =>
        pressed
          ? [buttonStyle, styles.root, styles.pressed]
          : [buttonStyle, styles.root]
      }
      onPress={onPress}
      android_ripple={{ color: theme.Colors.primary }}
    >
      <View>
        <Text style={textStyle}>{children}</Text>
      </View>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
  },
  inputContainer: {
    flex: 1,
  },
  pressed: {
    opacity: 0.75,
  },
});
