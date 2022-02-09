import React from "react";
import {
  TouchableWithoutFeedback,
  View,
  StyleSheet,
  Image,
  Text,
  Keyboard
} from "react-native";

import CustomButton from "../components/CustomButton";
import InputContainer from "../components/InputContainer";

const LoginScreen = (props) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Image
          style={styles.imageContainer}
          source={require("../assets/images/LoginWelcome.png")}
          // https://cdni.iconscout.com/illustration/premium/thumb/man-using-mobile-phone-2839467-2371260.png
        />
        <Text style={styles.welcomeText}>Welcome back!</Text>
        <InputContainer placeholder="User Name" />
        <InputContainer secureTextEntry={true} placeholder="Password" />
        <View
          style={{
            width: "80%",
            alignItems: "stretch",
            flexDirection: "row-reverse",
            marginTop: -5,
          }}
        >
          <Text
            onPress={() => {}}
            style={{ color: "gray", fontWeight: "bold" }}
          >
            Forgot Password?
          </Text>
        </View>
        <CustomButton
          onPress={() => {}}
          title="Log In"
          style={{ width: "50%", borderRadius: 50 }}
        />
        <View
          style={{
            borderBottomColor: "gray",
            borderBottomWidth: 0.6,
            width: "70%",
            marginVertical: 15,
          }}
        />
        <Text style={{ color: "gray" }}>Or Log In Useing</Text>
        <View
          style={{
            marginTop: 10,
            width: "80%",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <CustomButton
            onPress={() => {}}
            style={{ backgroundColor: "#6495ED", borderRadius: 8, paddingHorizontal: 20 }}
            title="  Facebook"
          ><Image style={{width: 15, height: 15,}} source={require("../assets/images/Fb.png")}/></CustomButton>
          <CustomButton
            onPress={() => {}}
            style={{
              backgroundColor: "red",
              borderRadius: 8,
              paddingHorizontal: 30,
            }}
            title="  Google"
          ><Image style={{width: 15, height: 15,}} source={require("../assets/images/Google.png")}/></CustomButton>
        </View>
        <Text style={{ marginTop: 40, fontWeight: "bold" }}>
          Don't have an account?{" "}
          <Text onPress={props.onSignUp} style={{ color: "blue" }}>
            Sign Up
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
  imageContainer: {
    height: 250,
    width: 250,
    maxWidth: "60%",
  },
  welcomeText: {
    marginTop: -20,
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 30,
  },
});

export default LoginScreen;
