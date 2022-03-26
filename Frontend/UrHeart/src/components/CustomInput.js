import React from "react";
import { TextInput, StyleSheet, View } from "react-native";

const CustomInput = (props) => {
  return (
    <TextInput
      value={props.value}
      onChangeText={props.setValue}
      placeholder={props.placeholder}
      style={{...styles.container, ...props.style}}
      secureTextEntry={props.secureTextEntry}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
    borderColor: "#e8e8e8",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginVertical: 5,
  },
});

export default CustomInput;
