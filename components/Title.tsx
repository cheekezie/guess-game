import { StyleSheet, Text } from "react-native";
import theme from "../theme";
import { TitlePropsI } from "../types/title";
import { TitleStyles } from "../styles/Title.style";

const Title = (props: TitlePropsI) => {
  return (
    <Text style={[TitleStyles.whiteTitle, props.textStyle]}>
      {props.children}
    </Text>
  );
};

export default Title;
