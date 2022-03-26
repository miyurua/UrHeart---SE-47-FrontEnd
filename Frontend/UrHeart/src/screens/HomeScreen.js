import React from "react";
import {
  View,
  Image,
  TouchableWithoutFeedback,
  StyleSheet,
  Keyboard,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import Card from "../components/Card";
import MENU from "../../assets/images/menu.png";
import AdaLOGO from "../../assets/images/adaptive-logo.png";
import ECG from "../../assets/images/ECG.png";
import DATA from "../../assets/images/data.png";
import ChanelDOC from "../../assets/images/ChanelDoctor.png";

const HomeScreen = () => {
  const navigation = useNavigation();

  const { height } = useWindowDimensions();
  const cardHeight = height * 0.33;
  const cardWidth = "47%";

  const onMenuPressed = () => {
    navigation.openDrawer()
  };

  const onWithDataPressed = () => {
    navigation.navigate('WithData')
  };

  const onWithECGPressed = () => {
    navigation.navigate('WithECG')
  };

  const onDocListPressed = () => {
    navigation.navigate("DoctorList");
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
        
        <View style={[styles.main, { height: height * 0.889 }]}>
          <View style={[styles.top, { paddingBottom: height * 0.04 }]}>
            <Card
              Text="Predict with manual data"
              style={{ height: cardHeight, width: cardWidth, }}
              onPress={onWithDataPressed}
            >
              <Image
                source={DATA}
                style={{ height: "100%", width: "100%", paddingTop: 10 }}
                resizeMode="contain"
              />
            </Card>

            <Card
              Text="Predict with ECG"
              style={{ height: cardHeight, width: cardWidth }}
              onPress={onWithECGPressed}
            >
              <Image
                source={ECG}
                style={{ height: "100%", width: "100%" }}
                resizeMode="contain"
              />
            </Card>
          </View>

          <Card
            Text="Doctors List"
            style={{ height: cardHeight, width: "83%" }}
            onPress={onDocListPressed}
          >
            <Image
              source={ChanelDOC}
              style={{ height: "100%", width: "100%" }}
              resizeMode="contain"
            />
          </Card>

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
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: "8%",
  },
  title: {
    fontWeight: "bold",
    color: "#051C60",
    margin: 10,
  },
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: "8%",
    justifyContent: "space-between",
  },
  main: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeScreen;
