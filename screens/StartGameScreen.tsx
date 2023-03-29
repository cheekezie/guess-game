import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Button } from "../components";
import { ButtonStyles } from "../styles/Button.style";
import theme from "../theme";
import { useState } from "react";
import Title from "../components/Title";

const StartGameScreen = (props: { onPickNumber: any }) => {
  const { onPickNumber } = props;
  const [enteredValue, setEnteredValue] = useState("");

  const inputHandler = (text: string) => {
    setEnteredValue(text);
  };

  const confirmInputHandler = () => {
    const choseNumber = parseInt(enteredValue);
    if (
      isNaN(choseNumber) ||
      choseNumber <= 0 ||
      choseNumber > 90 ||
      !choseNumber
    ) {
      Alert.alert("Input error", "enter a valid value between 1 - 99", [
        { text: "Okay", style: "cancel", onPress: resetInputHandler },
      ]);
      return;
    }
    onPickNumber(enteredValue);
  };

  const resetInputHandler = () => {
    setEnteredValue("");
    onPickNumber(null);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.root}>
          <Title>Guess my number</Title>
          <View style={styles.inputContainer}>
            <Text style={{ color: theme.Colors.white }}>Enter a number</Text>
            <TextInput
              style={styles.numberIput}
              inputMode="numeric"
              maxLength={2}
              onChangeText={inputHandler}
              value={enteredValue}
            />
            <View style={styles.buttonContainer}>
              <Button
                onPress={confirmInputHandler}
                textStyle={{ color: theme.Colors.white }}
                buttonStyle={[ButtonStyles.secondary, ButtonStyles.buttonSm]}
              >
                Confirm
              </Button>
              <Button
                onPress={resetInputHandler}
                buttonStyle={[ButtonStyles.white, ButtonStyles.buttonSm]}
              >
                Reset
              </Button>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default StartGameScreen;
const styles = StyleSheet.create({
  root: {
    marginHorizontal: 16,
    marginTop: 100,
  },
  inputContainer: {
    marginTop: 100,
    paddingVertical: 20,
    paddingHorizontal: 16,
    marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor: "#014E46",
    elevation: 8,
    shadowColor: "black",
    shadowOffset: {
      width: 20,
      height: 20,
    },
    shadowRadius: 20,
  },
  buttonContainer: {
    //flexDirection: "row",
    // justifyContent: "space-between",
  },
  numberIput: {
    marginBottom: 20,
    height: 50,
    borderBottomColor: theme.Colors.secondary,
    borderBottomWidth: 2,
    marginVertical: 8,
    borderColor: theme.Colors.secondary,
    color: theme.Colors.secondary,
    fontWeight: "bold",
    fontSize: theme.FontSize.boldInput,
    textAlign: "center",
    width: "100%",
  },
  buttonText: {
    color: theme.Colors.white,
  },
});
