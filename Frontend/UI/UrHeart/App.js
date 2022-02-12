<<<<<<< Updated upstream
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import SignUpScreen from "./screens/SignUpScreen";
import LoginScreen from "./screens/LoginScreen";

export default function App() {
  const [screenState, setScreenState] = useState('login');

  const signupHandler = () => {
    setScreenState('signup');
  };

  const loginHandler = () => {
    setScreenState('login');
  };

  let container = <LoginScreen onSignUp={signupHandler} />;
  if ( screenState === 'login') {
    container = <LoginScreen onSignUp={signupHandler} />
  }else if (screenState === 'signup'){
    container = <SignUpScreen onLogIn={loginHandler} />
  }

  return (
    <View style={styles.screen}>
      <StatusBar style="auto" />
      {container}
=======
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import LoginScreen from './Screens/LoginScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <LoginScreen />
>>>>>>> Stashed changes
    </View>
  );
}

const styles = StyleSheet.create({
<<<<<<< Updated upstream
  screen: {
    flex: 1,
=======
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
>>>>>>> Stashed changes
  },
});
