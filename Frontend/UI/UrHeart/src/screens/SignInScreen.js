import React, { useState } from "react";
import {
  TouchableWithoutFeedback,
  View,
  Image,
  StyleSheet,
  Keyboard,
  useWindowDimensions,
} from "react-native";
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

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSignInPressed = () => {
    navigation.navigate("Home");
  };

  const onForgotPasswordPressed = () => {
    navigation.navigate("ForgotPassword");
  };

  const onSignUpPress = () => {
    navigation.navigate("SignUp");
  };

  const onSignInFacebook = () => {
    console.warn("onSignInFacebook");
  };

  const onSignInGoogle = () => {
    console.warn("onSignInGoogle");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={[styles.container, { paddingTop: height * 0.05 }]}>
        <View style={styles.top}>
          <Image
            source={Logo}
            style={[styles.logo, { height: height * 0.3 }]}
            resizeMode="contain"
          />

          <CustomInput
            placeholder="Username"
            value={username}
            setValue={setUsername}
            textColor="white"
            style={{
              height: buttonHeight,
              marginVertical: buttonMargin,
              fontSize: fontHeight,
            }}
          />
          <CustomInput
            placeholder="Password"
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
            <Image source={FACEBOOK} style={{ width: 15, height: 15 }} />
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
            <Image source={GOOGLE} style={{ width: 16, height: 16 }} />
          </CustomButton>
        </View>

        <View style={styles.bottom}>
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
    flex: 1,
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
