import React, { useState, useEffect } from "react";
import {
  TouchableWithoutFeedback,
  View,
  Image,
  StyleSheet,
  Keyboard,
  useWindowDimensions,
  KeyboardAvoidingView,
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { auth } from "../authentication/firebase";

import Logo from "../../assets/images/logo.png";
import FACEBOOK from "../../assets/images/Fb.png";
import GOOGLE from "../../assets/images/Google.png";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";

const SignInScreen = () => {
  const navigation = useNavigation();

  const { height } = useWindowDimensions();
  const fontHeight = height * 0.0218;
  const buttonHeight = height * 0.075;
  const buttonMargin = (height * 0.018) / 2;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("Email");
  const [passwordError, setPasswordError] = useState("Password");

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      AsyncStorage.getItem("Email").then((Value) => {
        if (Value != null) {
          navigation.navigate("dnav", "Home");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const onSignInPressed = () => {
    if (email === "" || password === "") {
      setEmailError("Enter Email");
      setPasswordError("Enter Password");
    } else {
      auth
        .signInWithEmailAndPassword(email, password)
        .then((userCredentials) => {
          const user = userCredentials.user;
          console.log("Logged in with: ", user.email);
          setData();
          setEmail("");
          setPassword("");
          setEmailError("Email");
          setPasswordError("Password");
          navigation.navigate("dnav", "Home");
        })
        .catch((error) => alert(error.message));
    }
  };

  const setData = async () => {
    try {
      await AsyncStorage.setItem("Email", email);
    } catch (error) {
      console.log(error);
    }
  };

  const onForgotPasswordPressed = () => {
    navigation.navigate("ForgotPassword");
    setPassword("");
  };

  const onSignUpPress = () => {
    navigation.navigate("SignUp");
    setPassword("");
  };

  const onSignInFacebook = () => {
    console.warn("onSignInFacebook");
    setPassword("");
  };

  const onSignInGoogle = () => {
    console.warn("onSignInGoogle");
    setPassword("");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{ height: height, width: "100%", alignItems: "center" }}>
        <KeyboardAvoidingView
          behavior="padding"
          style={{
            height: height * 0.91,
            width: "90%",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Image
            source={Logo}
            style={[styles.logo, { height: height * 0.3 }]}
            resizeMode="contain"
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

          <CustomButton
            text="Sign In"
            fontSize={fontHeight}
            color="white"
            onPress={onSignInPressed}
            style={{
              backgroundColor: "#6600ff",
              height: buttonHeight,
              marginVertical: buttonMargin,
            }}
          />

          <CustomButton
            text="Forgot password?"
            color="gray"
            fontSize={fontHeight}
            onPress={onForgotPasswordPressed}
            style={{ height: buttonHeight, marginVertical: buttonMargin }}
          />

          {/* <CustomButton
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
          </CustomButton> */}
        </KeyboardAvoidingView>

        <View style={{ width: "90%" }}>
          <CustomButton
            text="Don't have an account? Create one"
            color="gray"
            fontSize={fontHeight}
            onPress={onSignUpPress}
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
  logo: {
    width: "70%",
    maxWidth: 240,
    maxHeight: 270,
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

export default SignInScreen;
