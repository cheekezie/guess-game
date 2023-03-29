import { LinearGradient } from "expo-linear-gradient";
import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { colors } from "./theme/default/colors";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import { StatusBar } from "expo-status-bar";
import GameOverScreen from "./screens/GameOverScreen";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [pickedNumber, setNumberPicked] = useState<number | null>(null);
  const [isGameOver, setGameOver] = useState<boolean>(false);

  const pickedNumberHandler = (number: number) => {
    setNumberPicked(number);
    setGameOver(false);
  };

  const handleGameOver = () => {
    setGameOver(true);
  };

  const handleRestartGame = () => {
    setGameOver(false);
    setNumberPicked(20);
  };

  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (pickedNumber) {
    screen = (
      <GameScreen
        userNumber={pickedNumber}
        onReset={pickedNumberHandler}
        onGameOver={handleGameOver}
      />
    );
  }

  if (isGameOver && pickedNumber) {
    screen = <GameOverScreen onStartNewGame={handleRestartGame} />;
  }
  setTimeout(() => {
    SplashScreen.hideAsync();
  }, 2000);

  return (
    <>
      <StatusBar style="light" />
      <LinearGradient
        colors={
          !pickedNumber
            ? [colors.secondary, colors.primary]
            : [colors.primary, colors.secondary]
        }
        style={styles.rootScreenStyle}
      >
        <ImageBackground
          resizeMode="cover"
          source={require("./assets/images/bg.png")}
          style={styles.bgImage}
          imageStyle={styles.bgOpacity}
        >
          <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    marginTop: 22,
  },
  rootScreenStyle: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  bgImage: {
    flex: 1,
  },
  bgOpacity: {
    opacity: 0.5,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
