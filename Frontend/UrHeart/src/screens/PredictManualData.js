import React, { useState } from "react";
import {
  View,
  Image,
  TouchableWithoutFeedback,
  StyleSheet,
  Keyboard,
  useWindowDimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

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

  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [chestPainType, setChestPainType] = useState("");
  const [restingBP, setRestingBP] = useState("");
  const [cholestrol, setCholestrol] = useState("");
  const [fastingBloodSugar, setFastingBloodSugar] = useState("");
  const [restingECG, setRestingECG] = useState("");
  const [maxHeartRate, setMaxHeartRate] = useState("");
  const [exerciseAngina, setExerciseAngina] = useState("");
  const [oldpeak, setOldpeak] = useState("");
  const [STslope, setSTSlope] = useState("");

  const onMenuPressed = () => {
    navigation.toggleDrawer();
  };

  const onProcessPress = () => {
    let collection = {};
    (collection.age = age),
      (collection.sex = sex),
      (collection.chestPainType = chestPainType),
      (collection.restingBP = restingBP),
      (collection.cholestrol = cholestrol),
      (collection.fastingBloodSugar = fastingBloodSugar),
      (collection.restingECG = restingECG),
      (collection.maxHeartRate = maxHeartRate),
      (collection.exerciseAngina = exerciseAngina),
      (collection.oldpeak = oldpeak),
      (collection.STslope = STslope);
    console.warn(collection);

    const url = "http://127.0.0.1:5000/test";

    fetch(url, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(collection),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

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

        <ScrollView
          style={{ height: height * 0.7, width: "100%", marginTop: 25 }}
        >
          <View
            style={{
              width: "100%",
              alignItems: "center",
              paddingHorizontal: "8%",
            }}
          >
            <CustomInput
              placeholder="Age"
              value={age}
              setValue={setAge}
              textColor="black"
              style={{
                height: buttonHeight,
                marginVertical: buttonMargin,
                fontSize: fontHeight,
              }}
            />

            <CustomInput
              placeholder="Gender"
              value={sex}
              setValue={setSex}
              textColor="black"
              style={{
                height: buttonHeight,
                marginVertical: buttonMargin,
                fontSize: fontHeight,
              }}
            />

            <CustomInput
              placeholder="Chest Pain Type"
              value={chestPainType}
              setValue={setChestPainType}
              textColor="black"
              style={{
                height: buttonHeight,
                marginVertical: buttonMargin,
                fontSize: fontHeight,
              }}
            />

            <CustomInput
              placeholder="Resting Blood Pressure"
              value={restingBP}
              setValue={setRestingBP}
              textColor="black"
              style={{
                height: buttonHeight,
                marginVertical: buttonMargin,
                fontSize: fontHeight,
              }}
            />

            <CustomInput
              placeholder="Serum Cholestrol"
              value={cholestrol}
              setValue={setCholestrol}
              textColor="black"
              style={{
                height: buttonHeight,
                marginVertical: buttonMargin,
                fontSize: fontHeight,
              }}
            />

            <CustomInput
              placeholder="Fasting Blood Sugar"
              value={fastingBloodSugar}
              setValue={setFastingBloodSugar}
              textColor="black"
              style={{
                height: buttonHeight,
                marginVertical: buttonMargin,
                fontSize: fontHeight,
              }}
            />

            <CustomInput
              placeholder="Resting ECG Results"
              value={restingECG}
              setValue={setRestingECG}
              textColor="black"
              style={{
                height: buttonHeight,
                marginVertical: buttonMargin,
                fontSize: fontHeight,
              }}
            />

            <CustomInput
              placeholder="Max Heart Rate Achieved"
              value={maxHeartRate}
              setValue={setMaxHeartRate}
              textColor="black"
              style={{
                height: buttonHeight,
                marginVertical: buttonMargin,
                fontSize: fontHeight,
              }}
            />

            <CustomInput
              placeholder="Exercise Induced Angina"
              value={exerciseAngina}
              setValue={setExerciseAngina}
              textColor="black"
              style={{
                height: buttonHeight,
                marginVertical: buttonMargin,
                fontSize: fontHeight,
              }}
            />

            <CustomInput
              placeholder="ST Depression Induced"
              value={oldpeak}
              setValue={setOldpeak}
              textColor="black"
              style={{
                height: buttonHeight,
                marginVertical: buttonMargin,
                fontSize: fontHeight,
              }}
            />

            <CustomInput
              placeholder="The Slope of the Peak Exercise ST Segment"
              value={STslope}
              setValue={setSTSlope}
              textColor="black"
              style={{
                height: buttonHeight,
                marginVertical: buttonMargin,
                fontSize: fontHeight,
              }}
            />

            <CustomButton
              text="Process data"
              fontSize={fontHeight}
              color="white"
              onPress={onProcessPress}
              style={{
                backgroundColor: "#6600ff",
                height: buttonHeight,
                marginVertical: buttonMargin,
              }}
            />
          </View>
        </ScrollView>
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
});

export default DoctorListScreen;
