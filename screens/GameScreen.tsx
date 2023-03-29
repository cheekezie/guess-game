import { View, Text, StyleSheet, Alert, FlatList } from "react-native";
import theme from "../theme";
import Title from "../components/Title";
import { TitleStyles } from "../styles/Title.style";
import { useEffect, useState } from "react";
import NumberContainer from "../components/NumberContainer";
import { Button } from "../components";
import { ButtonStyles } from "../styles/Button.style";
import { AntDesign } from "@expo/vector-icons";
import GuessLogItem from "./GuessLogItem";

const generateRandom = (max: number, min: number, exclude: number): number => {
  const randomNum = Math.floor(Math.random() * (max - min)) + min; // random number between min and max
  if (randomNum === exclude) {
    return generateRandom(min, max, exclude);
  }
  return randomNum;
};

let minBoundary = 1;
let maxBoundary = 100;
const GameScreen = (props: {
  onReset: any;
  userNumber: number;
  onGameOver?: any;
}) => {
  const { onReset, userNumber, onGameOver } = props;
  const initialGuess = generateRandom(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  const resetGame = () => {
    onReset(null);
  };

  const gameOver = () => {
    onGameOver(true);
  };

  const nextGuessHandler = (direction: "lower" | "greater") => {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert(`Don't Lie`, "you know that this is wrong", [
        {
          text: "Sorry",
          style: "cancel",
        },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    console.log(maxBoundary, minBoundary, currentGuess);

    const newRandomNum = generateRandom(
      minBoundary + 1,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRandomNum);
    setGuessRounds((prevGuessRounds) => [newRandomNum, ...prevGuessRounds]);
  };

  useEffect(() => {
    if (currentGuess === userNumber) {
      gameOver();
    }
  }, [currentGuess, userNumber, gameOver]);

  const guessRoundListLength = guessRounds.length;

  return (
    <View style={styles.screen}>
      <View>
        <Title>Opponent's Guess</Title>
        <NumberContainer>{currentGuess}</NumberContainer>
      </View>
      <View>
        <Text style={styles.text}>Higher or Lower?</Text>
        <View style={styles.buttonContainer}>
          <Button
            onPress={nextGuessHandler.bind(this, "lower")}
            textStyle={{ color: theme.Colors.white }}
            buttonStyle={[
              ButtonStyles.primary,
              ButtonStyles.buttonSm,
              styles.button,
            ]}
          >
            <AntDesign name="plus" size={24} color="white" />
          </Button>
          <Button
            onPress={nextGuessHandler.bind(this, "greater")}
            textStyle={{ color: theme.Colors.white }}
            buttonStyle={[
              ButtonStyles.primary,
              ButtonStyles.buttonSm,
              styles.button,
            ]}
          >
            <AntDesign name="minus" size={24} color="white" />
          </Button>
        </View>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => (
            <GuessLogItem
              roundNumber={guessRounds.length - itemData.index}
              guess={itemData.item}
            />
          )}
          keyExtractor={(item) => (Math.random() * item).toString()}
        />
      </View>
    </View>
  );
};

export default GameScreen;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
    alignItems: "center",
  },
  text: {
    fontSize: theme.FontSize.text,
    color: theme.Colors.white,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    // justifyContent: "space-between",
  },
  button: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
});
