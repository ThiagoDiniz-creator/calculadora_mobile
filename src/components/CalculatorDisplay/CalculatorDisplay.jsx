import { useRef } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const CalculatorDisplay = ({ input }) => {
  const scrollRef = useRef(null);
  return (
    <ScrollView
      horizontal
      style={styles.calculatorDisplayContainer}
      ref={scrollRef}
      onContentSizeChange={() =>
        scrollRef.current.scrollToEnd({ animated: true })
      }
    >
      <Text numberOfLines={1} style={styles.calculatorDisplay}>
        {input}
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  calculatorDisplayContainer: {
    paddingVertical: 18,
    backgroundColor: "#212121",
  },
  calculatorDisplay: {
    fontSize: 40,
    color: "#fff",
  },
});

export default CalculatorDisplay;
