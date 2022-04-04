import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Button,
  Image,
  TouchableWithoutFeedback,
  StyleSheet,
  Keyboard,
  useWindowDimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";

import MENU from "../../assets/images/menu.png";
import AdaLOGO from "../../assets/images/adaptive-logo.png";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";

const DoctorListScreen = () => {
  const { height } = useWindowDimensions();
  const fontHeight = height * 0.0218;
  const buttonHeight = height * 0.075;
  const buttonMargin = (height * 0.018) / 2;

  const navigation = useNavigation();

  const onMenuPressed = () => {
    navigation.toggleDrawer();
  };

  const onProcessPress = () => {};

  const [selectedImage, setSelectedImage] = useState(null);

  let openImagePickerAsync = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage({ localUri: pickerResult.uri });
  };

  let image;

  if (selectedImage !== null) {
    image = (
      <Image
        source={{ uri: selectedImage.localUri }}
        style={{ height: "100%", width: "100%" }}
        resizeMode="contain"
      />
    );
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={[styles.container, { paddingTop: height * 0.08 }]}>
        <View style={[styles.header, { height: height * 0.08 }]}>
          <TouchableOpacity
            style={{ height: height * 0.03, maxHeight: 55, width: "8%" }}
            onPress={onMenuPressed}
          >
            <Image
              source={MENU}
              style={{ height: "100%", width: "100%" }}
              resizeMode="contain"
            />
          </TouchableOpacity>

          <View style={{ height: height * 0.07, maxHeight: 55, width: "40%" }}>
            <Image
              source={AdaLOGO}
              style={{ height: "100%", width: "100%" }}
              resizeMode="contain"
            />
          </View>
        </View>

        <View style={{ height: "89%", width: "100%", marginTop: 25 }}>
          <View
            style={{
              width: "100%",
              alignItems: "center",
              paddingHorizontal: "8%",
            }}
          >
            <View style={{width: "100%", height: "85%"}}>
              <CustomButton
                text="Pick a photo"
                color="#6600ff"
                fontSize={fontHeight}
                onPress={openImagePickerAsync}
                style={{
                  height: buttonHeight,
                  marginVertical: buttonMargin,
                }}
              />
              <View
                style={{ width: "100%", height: "75%", marginVertical: 20 }}
              >
                {image}
              </View>
            </View>
            <CustomButton
              text="Process image"
              color="white"
              fontSize={fontHeight}
              onPress={onProcessPress}
              style={{
                backgroundColor: "#6600ff",
                height: buttonHeight,
                marginVertical: buttonMargin,
              }}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
  },
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: "8%",
    justifyContent: "space-between",
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
});

export default DoctorListScreen;
