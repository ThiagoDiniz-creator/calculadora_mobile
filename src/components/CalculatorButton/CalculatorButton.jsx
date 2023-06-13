import { Dimensions, StyleSheet, Text, TouchableHighlight } from "react-native";

const CalculatorButton = ({
  handlePress,
  label,
  highlight = false,
  lightHighlight = false,
}) => {
  const touchableStylesArr = [styles.button];
  if (highlight) touchableStylesArr.push(styles.buttonHighlight);
  const touchableTextStyles = highlight
    ? [styles.buttonText, styles.buttonTextHighlight]
    : [styles.buttonText];
  const underlayColor = highlight ? "#d74b48" : "#d8d8d8";

  return (
    <TouchableHighlight
      style={touchableStylesArr}
      onPress={handlePress}
      underlayColor={underlayColor}
    >
      <Text style={touchableTextStyles}>{label}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    height: Dimensions.get("window").width / 4,
    width: Dimensions.get("window").width / 4,
    backgroundColor: "#f0f0f0",
    borderWidth: 0.5,
    borderColor: "#888",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonHighlight: {
    backgroundColor: "#EF5350",
    borderColor: "#fff",
  },
  buttonExpanded: {
    width: Dimensions.get("window").width / 2,
  },
  buttonText: {
    fontSize: 28,
    fontWeight: 600,
    display: "flex",
  },
  buttonTextHighlight: {
    color: "#fff",
  },
});

export default CalculatorButton;
