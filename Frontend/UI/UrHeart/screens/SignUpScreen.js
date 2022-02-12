import React from "react";
import {
  TouchableWithoutFeedback,
  TouchableOpacity,
  View,
  StyleSheet,
  Keyboard,
  Text,
  Image,
} from "react-native";

import InputContainer from "../components/InputContainer";
import CustomButton from "../components/CustomButton";

const SignUpScreen = (props) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={{ width: "80%", marginTop: 30 }}>
          <TouchableOpacity onPress={props.onLogIn}>
            <Image
              style={{ height: 20, width: 10 }}
              source={require("../assets/images/BackArrow.png")}
            />
          </TouchableOpacity>
        </View>
        <Text style={{ fontWeight: "bold", fontSize: 30, margin: 20 }}>
          Lets Get Started!
        </Text>
        <View style={styles.inputContainer}>
          <InputContainer placeholder="First Name" />
          <InputContainer placeholder="Last Name" />
          <InputContainer placeholder="Email Address" />
          <InputContainer placeholder="User Name" />
          <InputContainer secureTextEntry={true} placeholder="Password" />
          <InputContainer
            secureTextEntry={true}
            placeholder="Confirm Password"
          />
          <CustomButton
            style={{ width: "50%", borderRadius: 50, marginTop: 20 }}
            title="Sign Up"
          />
        </View>
        <View
          style={{
            borderBottomColor: "gray",
            borderBottomWidth: 0.6,
            width: "70%",
          }}
        />
        <Text style={{ marginTop: 30, fontWeight: "bold" }}>
          Already have an account?{" "}
          <Text onPress={props.onLogIn} style={{ color: "blue" }}>
            Log In
          </Text>
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    padding: 20,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    marginTop: 20,
    width: "30%",
  },
});

export default SignUpScreen;
