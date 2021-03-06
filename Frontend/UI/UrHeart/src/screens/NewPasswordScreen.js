import React, { useState } from "react";
import {
  TouchableWithoutFeedback,
  View,
  Text,
  StyleSheet,
  Keyboard,
  useWindowDimensions,
} from "react-native";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";

const NewPasswordScreen = () => {
  const navigation = useNavigation();

  const { height } = useWindowDimensions();
  const fontHeight = height * 0.0218;
  const buttonHeight = height * 0.075;
  const buttonMargin = (height * 0.018) / 2;

  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const onSubmitPressed = () => {
    navigation.navigate("Home");
    setCode("");
    setNewPassword("");
  };

  const onSignInPress = () => {
    navigation.navigate("SignIn");
    setCode("");
    setNewPassword("");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={[styles.container, { paddingTop: height * 0.08 }]}>
        <View style={[styles.top, { paddingTop: height * 0.02 }]}>
          <Text style={[styles.title, { fontSize: height * 0.036 }]}>
            Reset your password
          </Text>

          <CustomInput
            placeholder="Code"
            value={code}
            setValue={setCode}
            style={{
              height: buttonHeight,
              marginVertical: buttonMargin,
              fontSize: fontHeight,
            }}
          />

          <CustomInput
            placeholder="Enter your new password"
            value={newPassword}
            setValue={setNewPassword}
            secureTextEntry
            style={{
              height: buttonHeight,
              marginVertical: buttonMargin,
              fontSize: fontHeight,
            }}
          />

          <CustomButton
            text="Submit"
            fontSize={fontHeight}
            color="white"
            onPress={onSubmitPressed}
            style={{
              backgroundColor: "#6600ff",
              height: buttonHeight,
              marginVertical: buttonMargin,
            }}
          />
        </View>

        <View style={styles.bottom}>
          <CustomButton
            text="Back to Sign in"
            color="gray"
            fontSize={fontHeight}
            onPress={onSignInPress}
            style={{
              height: buttonHeight,
              marginVertical: buttonMargin,
            }}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontWeight: "bold",
    color: "#051C60",
    margin: 10,
  },
  back: {
    width: "6%",
    maxWidth: 50,
    maxHeight: 50,
  },
  top: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  bottom: {
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 20,
  },
});

export default NewPasswordScreen;
