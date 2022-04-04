import React, { useState } from "react";
import {
  TouchableWithoutFeedback,
  View,
  Image,
  Text,
  StyleSheet,
  Keyboard,
  useWindowDimensions,
} from "react-native";
import FACEBOOK from "../../assets/images/Fb.png";
import GOOGLE from "../../assets/images/Google.png";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";

import AsyncStorage from "@react-native-async-storage/async-storage";

const SignUpScreen = () => {
  const navigation = useNavigation();

  const { height } = useWindowDimensions();
  const fontHeight = height * 0.0218;
  const buttonHeight = height * 0.075;
  const buttonMargin = (height * 0.018) / 2;

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  const [usernameError, setUsernameError] = useState("Username");
  const [emailError, setEmailError] = useState("Email");
  const [passwordError, setPasswordError] = useState("Password");
  const [passwordRepeatError, setPasswordRepeatError] = useState("Repeat Password");

  const onRegisterPressed = async () => {
    if (username != "" && email != "" && password != "" && password === passwordRepeat) {
      try {
        await AsyncStorage.setItem("UserName", username);
      } catch (error) {
        console.log(error);
      }
      try {
        await AsyncStorage.setItem("Email", email);
      } catch (error) {
        console.log(error);
      }
      setUsername("");
      setEmail("");
      setPassword("");
      setPasswordRepeat("");
      setUsernameError("Username");
      setEmailError("Email");
      setPasswordError("Password");
      setPasswordRepeatError("Repeat Password");
      navigation.navigate("ConfirmEmail");
    } else if (username === "" || email === "" || password === ""){
      setUsernameError("Enter Username");
      setEmailError("Enter Email");
      setPasswordError("Enter Password");
    } else {
      setPasswordRepeat("");
      setPasswordRepeatError("Check your password & try again");
    }
  };

  const onSignInPressed = () => {
    navigation.navigate("SignIn");
    setUsername("");
    setEmail("");
    setPassword("");
    setPasswordRepeat("");
  };

  const onSignInFacebook = () => {
    console.warn("onSignInFacebook");
    setUsername("");
    setEmail("");
    setPassword("");
    setPasswordRepeat("");
  };

  const onSignInGoogle = () => {
    console.warn("onSignInGoogle");
    setUsername("");
    setEmail("");
    setPassword("");
    setPasswordRepeat("");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={[styles.container, { paddingTop: height * 0.08 }]}>
        <View style={[styles.top, { paddingTop: height * 0.05 }]}>
          <Text style={[styles.title, { fontSize: height * 0.04 }]}>
            Create an account
          </Text>

          <CustomInput
            placeholder={usernameError}
            value={username}
            setValue={setUsername}
            style={{
              height: buttonHeight,
              marginVertical: buttonMargin,
              fontSize: fontHeight,
            }}
          />

          <CustomInput
            placeholder={emailError}
            value={email}
            setValue={setEmail}
            textColor="white"
            style={{
              height: buttonHeight,
              marginVertical: buttonMargin,
              fontSize: fontHeight,
            }}
          />

          <CustomInput
            placeholder={passwordError}
            value={password}
            setValue={setPassword}
            textColor="black"
            secureTextEntry
            style={{
              height: buttonHeight,
              marginVertical: buttonMargin,
              fontSize: fontHeight,
            }}
          />

          <CustomInput
            placeholder={passwordRepeatError}
            value={passwordRepeat}
            setValue={setPasswordRepeat}
            textColor="black"
            secureTextEntry
            style={{
              height: buttonHeight,
              marginVertical: buttonMargin,
              fontSize: fontHeight,
            }}
          />

          <CustomButton
            text="Register"
            fontSize={fontHeight}
            color="white"
            onPress={onRegisterPressed}
            style={{
              backgroundColor: "#6600ff",
              height: buttonHeight,
              marginVertical: buttonMargin,
            }}
          />

          <CustomButton
            text="Sign In with Facebook"
            color="#4765A9"
            fontSize={fontHeight}
            width="80%"
            onPress={onSignInFacebook}
            style={{
              backgroundColor: "#E7EAF4",
              height: buttonHeight,
              marginVertical: buttonMargin,
            }}
          >
            <View style={{ width: fontHeight, height: fontHeight }}>
              <Image
                source={FACEBOOK}
                style={{ width: "100%", height: "100%" }}
                resizeMode="contain"
              />
            </View>
          </CustomButton>

          <CustomButton
            text="Sign In with Google"
            color="#DD4D44"
            fontSize={fontHeight}
            width="80%"
            onPress={onSignInGoogle}
            style={{
              backgroundColor: "#FAE9EA",
              height: buttonHeight,
              marginVertical: buttonMargin,
            }}
          >
            <View style={{ width: fontHeight + 2, height: fontHeight + 2 }}>
              <Image
                source={GOOGLE}
                style={{ width: "100%", height: "100%" }}
                resizeMode="contain"
              />
            </View>
          </CustomButton>
        </View>

        <View style={styles.bottom}>
          <CustomButton
            text="Have an account? Sign in"
            color="gray"
            fontSize={fontHeight}
            onPress={onSignInPressed}
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

export default SignUpScreen;
