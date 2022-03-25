import React, { useState }  from "react";
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

import Card from "../components/Card";
import MENU from "../../assets/images/menu.png";
import AdaLOGO from "../../assets/images/adaptive-logo.png";
import CustomInput from "../components/CustomInput";

const DoctorListScreen = () => {
  const { height } = useWindowDimensions();
  const cardHeight = height * 0.12;
  const cardWidth = "80%";
  const cardMargin = 10;
  const fontHeight = height * 0.0218;
  const buttonHeight = height * 0.075;
  const buttonMargin = (height * 0.018) / 2;

  const navigation = useNavigation();

  const [age, setAge] = useState("");
  const [Gender, setGender] = useState("");
  const [ChestPainType, setChestPainType] = useState("");
  const [RestingBloodPressure, setRestingBloodPressure] = useState("");
  const [SerumCholestrol, setSerumCholestrol] = useState("");
  const [FastingBloodSugar, setFastingBloodSugar] = useState("");
  const [RestingECGResults, setRestingECGResults] = useState("");
  const [MaxHeartRateAchieved, setMaxHeartRateAchieved] = useState("");
  const [ExerciseInducedAngina, setExerciseInducedAngina] = useState("");
  const [STDepressionInduced, setSTDepressionInduced] = useState("");
  

  
  

  const onMenuPressed = () => {
    navigation.toggleDrawer();
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={[styles.container, { paddingTop: height * 0.08 }]}>
        <View style={[styles.header, { height: height * 0.1 }]}>
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

        <ScrollView style={{height: height * 0.79, width: '100%', marginTop: 30}}>
          <View style={{width: '100%', alignItems: 'center'}}>
            <CustomInput
              placeholder="Age"
              value={age}
              setValue={setAge}
              textColor="black"
              // secureTextEntry
              style={{
                height: buttonHeight,
                marginVertical: buttonMargin,
                fontSize: fontHeight,
              }}
            />
            <CustomInput
              placeholder="Gender"
              value={Gender}
              setValue={setGender}
              textColor="black"
              // secureTextEntry
              style={{
                height: buttonHeight,
                marginVertical: buttonMargin,
                fontSize: fontHeight,
              }}
            />
              <CustomInput
              placeholder="Chest Pain Type"
              value={ChestPainType}
              setValue={setChestPainType}
              textColor="black"
              // secureTextEntry
              style={{
                height: buttonHeight,
                marginVertical: buttonMargin,
                fontSize: fontHeight,
              }}
            />
            <CustomInput
              placeholder="Resting Blood Pressure"
              value={RestingBloodPressure}
              setValue={setRestingBloodPressure}
              textColor="black"
              // secureTextEntry
              style={{
                height: buttonHeight,
                marginVertical: buttonMargin,
                fontSize: fontHeight,
              }}
            />
          <CustomInput
              placeholder="Resting Blood Pressure"
              value={RestingBloodPressure}
              setValue={setRestingBloodPressure}
              textColor="black"
              // secureTextEntry
              style={{
                height: buttonHeight,
                marginVertical: buttonMargin,
                fontSize: fontHeight,
              }}
            />
            <CustomInput
              placeholder="Serum Cholestrol"
              value={SerumCholestrol}
              setValue={setSerumCholestrol}
              textColor="black"
              // secureTextEntry
              style={{
                height: buttonHeight,
                marginVertical: buttonMargin,
                fontSize: fontHeight,
              }}
            />
            <CustomInput
              placeholder="Fasting Blood Sugar"
              value={FastingBloodSugar}
              setValue={setFastingBloodSugar}
              textColor="black"
              // secureTextEntry
              style={{
                height: buttonHeight,
                marginVertical: buttonMargin,
                fontSize: fontHeight,
              }}
            />
              <CustomInput
              placeholder="Resting ECG Results"
              value={RestingECGResults}
              setValue={setRestingECGResults}
              textColor="black"
              // secureTextEntry
              style={{
                height: buttonHeight,
                marginVertical: buttonMargin,
                fontSize: fontHeight,
              }}
            />
            <CustomInput
              placeholder="Max Heart Rate Achieved"
              value={MaxHeartRateAchieved}
              setValue={setMaxHeartRateAchieved}
              textColor="black"
              // secureTextEntry
              style={{
                height: buttonHeight,
                marginVertical: buttonMargin,
                fontSize: fontHeight,
              }}
            />
            <CustomInput
              placeholder="Exercise Induced Angina"
              value={ExerciseInducedAngina}
              setValue={setExerciseInducedAngina}
              textColor="black"
              // secureTextEntry
              style={{
                height: buttonHeight,
                marginVertical: buttonMargin,
                fontSize: fontHeight,
              }}
            />
          <CustomInput
              placeholder="ST Depression Induced"
              value={STDepressionInduced}
              setValue={setSTDepressionInduced}
              textColor="black"
              // secureTextEntry
              style={{
                height: buttonHeight,
                marginVertical: buttonMargin,
                fontSize: fontHeight,
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
