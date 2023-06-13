import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import CalculatorDisplay from "./components/CalculatorDisplay/CalculatorDisplay";
import CalculatorKeyboard from "./components/CalculatorKeyboard/CalculatorKeyboard";

export default function App() {
  const [input, setInput] = useState("");

  const calculate = () => {
    const operators = input.match(/\/|x|\+|%|-/g);
    const values = input.match(/([+-]?\d+\.\d+)|([+-]?\d+)/g);

    if (values.length === 1 || values.length === 0) {
      return;
    }

    if (operators && operators.length !== 0) {
      operators.map((inputOp, idx) => {
        if (inputOp === "%") {
          if (idx + 1 === operators.length && idx > 0) {
            const result = +values[idx] * (+values[idx - 1] / 100);
            values[idx] = result;
            values.splice(idx - 1, 1);
          } else {
            const result = +values[idx] * (+values[idx + 1] / 100);
            values[idx] = result;
            values.splice(idx + 1, 1);
          }
        } else if (inputOp === "x") {
          if (idx + 1 === operators.length && idx > 0) {
            const result = +values[idx - 1] * +values[idx];
            values[idx] = result;
            values.splice(idx - 1, 1);
          } else {
            const result = +values[idx] * +values[idx + 1];
            values[idx] = result;
            values.splice(idx + 1, 1);
          }
        } else if (inputOp === "/") {
          if (idx + 1 === operators.length && idx > 0) {
            const result = +values[idx - 1] / +values[idx];
            values[idx] = result;
            values.splice(idx - 1, 1);
          } else {
            const result = +values[idx] / +values[idx + 1];
            values[idx] = result;
            values.splice(idx + 1, 1);
          }
        }
      });
    }
    const finalResult = values.reduce((prev, curr) => +prev + +curr);
    if (isNaN(finalResult)) {
      return setInput("Error");
    }
    setInput(`${Number(finalResult).toFixed(2)}`);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <CalculatorDisplay input={input} />
        <CalculatorKeyboard
          input={input}
          setInput={setInput}
          calculate={calculate}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
