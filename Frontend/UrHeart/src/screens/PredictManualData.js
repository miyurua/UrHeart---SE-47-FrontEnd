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
  Picker,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

import MENU from "../../assets/images/menu.png";
import AdaLOGO from "../../assets/images/adaptive-logo.png";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";

const DoctorListScreen = () => {
  const { height } = useWindowDimensions();
  const fontHeight = height * 0.0218;
  const buttonHeight = height * 0.075;
  const buttonMargin = (height * 0.03) / 2;

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

  const onAgeSet = (inputText) => {
    if (inputText < 0 || inputText > 100) {
      Alert.alert("Invalid Input!", "Age has to be between 1 to 100", [
        { text: "Okay", style: "destructive" },
      ]);
      return;
    }
    setAge(inputText);
  };

  const onRestingBPSet = (inputText) => {
    if (inputText < 0 || inputText > 250) {
      Alert.alert(
        "Invalid Input!",
        "Resting Blood presure has to be between 0 to 200",
        [{ text: "Okay", style: "destructive" }]
      );
      return;
    }
    setRestingBP(inputText);
  };

  const onCholestrolSet = (inputText) => {
    if (inputText < 0 || inputText > 650) {
      Alert.alert(
        "Invalid Input!",
        "Serum Cholestrol has to be between 0 to 650",
        [{ text: "Okay", style: "destructive" }]
      );
      return;
    }
    setCholestrol(inputText);
  };

  const onmaxHeartRateSet = (inputText) => {
    if (inputText < 0 || inputText > 250) {
      Alert.alert(
        "Invalid Input!",
        "Max Heart Rate should be below 250",
        [{ text: "Okay", style: "destructive" }]
      );
      return;
    }
    setMaxHeartRate(inputText);
  };

  const onOldpeakSet = (inputText) => {
    if (inputText < -2.5 || inputText > 6.2) {
      Alert.alert(
        "Invalid Input!",
        "ST Depression Induced should be between -2.5 to 6.2",
        [{ text: "Okay", style: "destructive" }]
      );
      return;
    }
    setOldpeak(inputText);
  };

  const onMenuPressed = () => {
    navigation.toggleDrawer();
  };

  const onProcessPress = () => {
    if (
      age == "" ||
      sex == "" ||
      chestPainType == "" ||
      restingBP == "" ||
      cholestrol == "" ||
      fastingBloodSugar == "" ||
      restingECG == "" ||
      maxHeartRate == "" ||
      exerciseAngina == "" ||
      oldpeak == "" ||
      STslope == ""
    ) {
      Alert.alert(
        "In complete fields!",
        "complete every field to get prediction",
        [{ text: "Okay", style: "destructive" }]
      );
      return;
    } else {
      const url = "http://192.168.1.3:3000/pred";

      axios
        .post(url, {
          Title: "Values for prediction",
          headers: {
            "Content-Type": "application/json",
          },
          body: {
            age: age,
            sex: sex,
            chestPainType: chestPainType,
            restingBP: restingBP,
            cholestrol: cholestrol,
            fastingBloodSugar: fastingBloodSugar,
            restingECG: restingECG,
            maxHeartRate: maxHeartRate,
            exerciseAngina: exerciseAngina,
            oldpeak: oldpeak,
            STslope: STslope,
          },
        })
        .then(function (response) {
          // console.log(response.data.predResult);
          if (response.data.predResult === "0") {
            navigation.navigate("nohd");
            navigation.navigate("dnav");
          } else if (response.data.predResult === "1") {
            navigation.navigate("havehd");
            navigation.navigate("dnav");
          }
        })
        .catch(function (error) {
          console.log(error);
        });

      setAge("");
      setSex("");
      setChestPainType("");
      setRestingBP("");
      setCholestrol("");
      setFastingBloodSugar("");
      setRestingECG("");
      setMaxHeartRate("");
      setExerciseAngina("");
      setOldpeak("");
      setSTSlope("");
    }
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

        <ScrollView style={{ height: "85%", width: "100%", marginTop: 25 }}>
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
              setValue={onAgeSet}
              textColor="black"
              style={{
                height: buttonHeight,
                marginVertical: buttonMargin,
                fontSize: fontHeight,
              }}
              keyboardType={"numeric"}
            />

            <View style={[styles.pickerStyle, { height: buttonHeight }]}>
              <Picker
                selectedValue={sex}
                style={{ height: "100%", width: "100%" }}
                onValueChange={(itemValue) => setSex(itemValue)}
              >
                <Picker.Item label="Gender" value="" />
                <Picker.Item label="Male" value="0" />
                <Picker.Item label="Female" value="1" />
              </Picker>
            </View>

            <View style={[styles.pickerStyle, { height: buttonHeight }]}>
              <Picker
                selectedValue={chestPainType}
                style={{ height: "100%", width: "100%" }}
                onValueChange={(itemValue) => setChestPainType(itemValue)}
              >
                <Picker.Item label="Chest Pain Type" value="" />
                <Picker.Item label="Typical Angina" value="1" />
                <Picker.Item label="Atypical Angina" value="2" />
                <Picker.Item label="Non-Anginal Pain" value="3" />
                <Picker.Item label="Asymptomatic" value="4" />
              </Picker>
            </View>

            <CustomInput
              placeholder="Resting Blood Pressure"
              value={restingBP}
              setValue={onRestingBPSet}
              textColor="black"
              style={{
                height: buttonHeight,
                marginVertical: buttonMargin,
                fontSize: fontHeight,
              }}
              keyboardType={"numeric"}
            />

            <CustomInput
              placeholder="Serum Cholestrol"
              value={cholestrol}
              setValue={onCholestrolSet}
              textColor="black"
              style={{
                height: buttonHeight,
                marginVertical: buttonMargin,
                fontSize: fontHeight,
              }}
              keyboardType={"numeric"}
            />

            <View style={[styles.pickerStyle, { height: buttonHeight }]}>
              <Picker
                selectedValue={fastingBloodSugar}
                style={{ height: "100%", width: "100%" }}
                onValueChange={(itemValue) => setFastingBloodSugar(itemValue)}
              >
                <Picker.Item label="Fasting Blood Sugar" value="" />
                <Picker.Item label="Higher than 120 mg/dl" value="0" />
                <Picker.Item label="Lower than 120 mg/dl" value="1" />
              </Picker>
            </View>

            <View style={[styles.pickerStyle, { height: buttonHeight }]}>
              <Picker
                selectedValue={restingECG}
                style={{ height: "100%", width: "100%" }}
                onValueChange={(itemValue) => setRestingECG(itemValue)}
              >
                <Picker.Item label="Resting ECG Results" value="" />
                <Picker.Item label="Normal" value="0" />
                <Picker.Item label="Abnormality in ST-T wave" value="1" />
                <Picker.Item label="Left ventricular hypertrophy" value="2" />
              </Picker>
            </View>

            <CustomInput
              placeholder="Max Heart Rate Achieved"
              value={maxHeartRate}
              setValue={onmaxHeartRateSet}
              textColor="black"
              style={{
                height: buttonHeight,
                marginVertical: buttonMargin,
                fontSize: fontHeight,
              }}
              keyboardType={"numeric"}
            />

            <View style={[styles.pickerStyle, { height: buttonHeight }]}>
              <Picker
                selectedValue={exerciseAngina}
                style={{ height: "100%", width: "100%" }}
                onValueChange={(itemValue) => setExerciseAngina(itemValue)}
              >
                <Picker.Item label="Exercise Induced Angina" value="" />
                <Picker.Item label="True" value="0" />
                <Picker.Item label="False" value="1" />
              </Picker>
            </View>

            <CustomInput
              placeholder="ST Depression Induced"
              value={oldpeak}
              setValue={onOldpeakSet}
              textColor="black"
              style={{
                height: buttonHeight,
                marginVertical: buttonMargin,
                fontSize: fontHeight,
              }}
              keyboardType={"numeric"}
            />

            <View style={[styles.pickerStyle, { height: buttonHeight }]}>
              <Picker
                selectedValue={STslope}
                style={{ height: "100%", width: "100%" }}
                onValueChange={(itemValue) => setSTSlope(itemValue)}
              >
                <Picker.Item
                  label="The Slope of the Peak Exercise ST Segment"
                  value=""
                />
                <Picker.Item label="Normal" value="0" />
                <Picker.Item label="Upsloping" value="1" />
                <Picker.Item label="Flat" value="2" />
                <Picker.Item label="Downsloping" value="3" />
              </Picker>
            </View>

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
  pickerStyle: {
    backgroundColor: "white",
    width: "100%",
    borderColor: "#e8e8e8",
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 10,
    marginVertical: 5,
  },
});

export default DoctorListScreen;
