import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const CustomButton = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.6} {...props} style={{ ...styles.pressableContainer, ...props.style }}>
      <Text style={styles.text}>{props.children}{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  pressableContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#4682B4",
    margin: 10
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

export default CustomButton;
