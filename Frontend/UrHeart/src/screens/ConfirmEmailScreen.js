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

const ConfirmEmailScreen = () => {
  const navigation = useNavigation();

  const { height } = useWindowDimensions();
  const fontHeight = height * 0.0218;
  const buttonHeight = height * 0.075;
  const buttonMargin = (height * 0.018) / 2;

  const [code, setCode] = useState("");

  const onConfirmPressed = () => {
    navigation.navigate("dnav", "Home");
    setCode("");
  };

  const onSignInPress = () => {
    navigation.navigate("SignIn");
    setCode("");
  };

  const onResendPress = () => {
    console.warn("onResendPress");
    setCode("");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={[styles.container, { paddingTop: height * 0.08 }]}>
        <View style={[styles.top, { paddingTop: height * 0.02 }]}>
          <Text style={[styles.title, { fontSize: height * 0.04 }]}>
            Confirm your email
          </Text>

          <CustomInput
            placeholder="Enter your confirmation code"
            value={code}
            setValue={setCode}
            style={{
              height: buttonHeight,
              marginVertical: buttonMargin,
              fontSize: fontHeight,
            }}
          />

          <CustomButton
            text="Confirm"
            fontSize={fontHeight}
            color="white"
            onPress={onConfirmPressed}
            style={{
              backgroundColor: "#6600ff",
              height: buttonHeight,
              marginVertical: buttonMargin,
            }}
          />

          <CustomButton
            text="Resend code"
            fontSize={fontHeight}
            color="#6600ff"
            onPress={onResendPress}
            style={{
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
    justifyContent: 'center',
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 20,
    
  },
  bottom: {
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 20,
  },
});

export default ConfirmEmailScreen;
