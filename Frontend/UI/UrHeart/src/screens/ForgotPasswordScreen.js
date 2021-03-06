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

const ForgotPasswordScreen = () => {
  const navigation = useNavigation();

  const { height } = useWindowDimensions();
  const fontHeight = height * 0.0218;
  const buttonHeight = height * 0.075;
  const buttonMargin = (height * 0.018) / 2;

  const [username, setUsername] = useState("");

  const onSendPressed = () => {
    navigation.navigate("NewPassword");
    setUsername("");
  };

  const onSignInPress = () => {
    navigation.navigate("SignIn");
    setUsername("");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={[styles.container, { paddingTop: height * 0.08 }]}>
        <View style={[styles.top, { paddingTop: height * 0.02 }]}>
          <Text style={[styles.title, { fontSize: height * 0.036 }]}>
            Reset your password
          </Text>

          <CustomInput
            placeholder="Username"
            value={username}
            setValue={setUsername}
            style={{
              height: buttonHeight,
              marginVertical: buttonMargin,
              fontSize: fontHeight,
            }}
          />

          <CustomButton
            text="Send"
            fontSize={fontHeight}
            color="white"
            onPress={onSendPressed}
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

export default ForgotPasswordScreen;
