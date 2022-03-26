import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const CustomButton = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.05}
      {...props}
      style={{ ...styles.container, ...props.style }}
    >
      {props.children}
      <Text
        style={[
          styles.TextDecoder,
          props.color ? { color: props.color } : {},
          props.fontSize ? { fontSize: props.fontSize } : {},
          props.width ? {width: props.width, textAlign: 'center'} : {}
        ]}
      >
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 5,
    alignItems: "center",
    borderRadius: 9,
    justifyContent: "center",
  },
  TextDecoder: {
    fontWeight: "bold",
  },
});

export default CustomButton;
