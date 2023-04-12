import { Image, StyleSheet, Text, View } from "react-native";
import Title from "../components/Title";
import theme from "../theme";
import { Button } from "../components";
import { ButtonStyles } from "../styles/Button.style";
import React from "react";

const GameOverScreen = (props: { onStartNewGame: any }) => {
  const restartGame = () => {
    props.onStartNewGame();
  };
  return (
    <View style={styles.rootContainer}>
      <Title>Game over !</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={{ color: theme.Colors.white }}>
        Your phone needed <Text style={styles.highLight}>X</Text> rounds to
        guess number <Text style={styles.highLight}>Y</Text>{" "}
      </Text>
      <Button
        textStyle={{ color: theme.Colors.white }}
        onPress={restartGame}
        buttonStyle={[
          ButtonStyles.primary,
          ButtonStyles.buttonSm,
          styles.button,
        ]}
      >
        Start new Game
      </Button>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  imageContainer: {
    borderRadius: 150,
    height: 300,
    width: 300,
    borderWidth: 3,
    borderColor: theme.Colors.primary,
    margin: 36,
    overflow: "hidden",
  },
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: "100%",
    width: "100%",
  },
  highLight: {
    color: theme.Colors.secondary,
    fontWeight: "bold",
  },
  button: {
    marginTop: 20,
    width: 200,
  },
});
