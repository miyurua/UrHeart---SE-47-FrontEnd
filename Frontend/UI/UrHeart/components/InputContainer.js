import React, {useState} from "react";
import { TextInput, StyleSheet } from "react-native";

const InputContainer = (props) => {
  const [enterdValue, setEnterdValue] = useState("")
  const [focus, setfocus] = useState(false);

  let customStyle = styles.input;
  if (focus === false){
    customStyle = styles.input;
  }else {
    customStyle = styles.focusInput;
  };

  const focusHndler = () => {
    setfocus(true);
  };

  const blurHandler = () => {
    setfocus(false)
  };

  const inputHandler = (enterdText) => {
    setEnterdValue(enterdText);
  };

  return <TextInput onChangeText={inputHandler} value={enterdValue} onFocus={focusHndler} onBlur={blurHandler} {...props} style={customStyle}/>;
};

const styles = StyleSheet.create({
  input: {
    width: "80%",
    borderColor: "gray",
    borderWidth: 1,
    marginVertical: 10,
    padding: 10,
    paddingHorizontal: 30,
    borderRadius: 30,
    fontSize: 15,
    color: 'gray'
  },
  focusInput: {
    width: "80%",
    borderColor: "#4682B4",
    borderWidth: 2,
    marginVertical: 10,
    padding: 10,
    paddingHorizontal: 30,
    borderRadius: 30,
    fontSize: 15,
    color: '#4682B4',
    fontWeight: 'bold'
  }
});

export default InputContainer;
