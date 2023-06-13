import { StyleSheet, View } from "react-native";
import CalculatorButton from "../CalculatorButton/CalculatorButton";

const CalculatorKeyboard = ({ input, setInput, calculate }) => {
  const isPrevNumber = () => !isNaN(Number(input.at(-1)));

  return (
    <View style={styles.calculatorKeyboard}>
      <CalculatorButton
        handlePress={() => setInput("")}
        label={"AC"}
        highlight
      />
      <CalculatorButton
        handlePress={() => {
          if (input.length > 0) {
            const values = input.match(/([+-]?\d+)/g);
            if (values.length === 1) {
              values[values.length - 1] =
                +values.at(-1) < 0 ? -+values.at(-1) : -+values.at(-1);
            } else {
              values[values.length - 1] =
                +values.at(-1) < 0 ? `+${-+values.at(-1)}` : -+values.at(-1);
            }
            setInput(values.join(""));
          }
        }}
        label={"+/-"}
        highlight
      />
      <CalculatorButton
        handlePress={() => {
          if (isPrevNumber()) setInput(prevVal => `${prevVal}%`);
        }}
        label={"%"}
        highlight
      />
      <CalculatorButton
        handlePress={() => {
          if (input.length > 0) setInput(prevVal => prevVal.slice(0, -1));
        }}
        label={"DEL"}
        highlight
      />

      <CalculatorButton
        handlePress={() => setInput(prevVal => `${prevVal}7`)}
        label={"7"}
      />
      <CalculatorButton
        handlePress={() => setInput(prevVal => `${prevVal}8`)}
        label={"8"}
      />
      <CalculatorButton
        handlePress={() => setInput(prevVal => `${prevVal}9`)}
        label={"9"}
      />
      <CalculatorButton
        handlePress={() => {
          if (isPrevNumber()) setInput(prevVal => `${prevVal}/`);
        }}
        label={"/"}
        highlight
      />

      <CalculatorButton
        handlePress={() => setInput(prevVal => `${prevVal}4`)}
        label={"4"}
      />
      <CalculatorButton
        handlePress={() => setInput(prevVal => `${prevVal}5`)}
        label={"5"}
      />
      <CalculatorButton
        handlePress={() => setInput(prevVal => `${prevVal}6`)}
        label={"6"}
      />
      <CalculatorButton
        handlePress={() => {
          if (isPrevNumber()) setInput(prevVal => `${prevVal}x`);
        }}
        label={"x"}
        highlight
      />

      <CalculatorButton
        handlePress={() => setInput(prevVal => `${prevVal}1`)}
        label={"1"}
      />
      <CalculatorButton
        handlePress={() => setInput(prevVal => `${prevVal}2`)}
        label={"2"}
      />
      <CalculatorButton
        handlePress={() => setInput(prevVal => `${prevVal}3`)}
        label={"3"}
      />
      <CalculatorButton
        handlePress={() => {
          if (Number(input.at(-1) || !input.at(-1)))
            setInput(prevVal => `${prevVal}-`);
        }}
        label={"-"}
        highlight
      />
      <CalculatorButton
        handlePress={() => setInput(prevVal => `${prevVal}0`)}
        label={"0"}
      />
      <CalculatorButton
        handlePress={() => {
          if (input.at(-1) !== "." && isPrevNumber())
            setInput(prevVal => `${prevVal}.`);
        }}
        label={"."}
      />
      <CalculatorButton handlePress={calculate} label={"="} highlight />
      <CalculatorButton
        handlePress={() => {
          if (isPrevNumber()) setInput(prevVal => `${prevVal}+`);
        }}
        label={"+"}
        highlight
      />
    </View>
  );
};

const styles = StyleSheet.create({
  calculatorKeyboard: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export default CalculatorKeyboard;
