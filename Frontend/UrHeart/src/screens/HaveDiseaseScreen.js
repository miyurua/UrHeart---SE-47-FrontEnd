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
import Failed from "../../assets/images/failed.png";

const HaveDiseaseScreen = () => {
  const { height } = useWindowDimensions();
  const cardHeight = height * 0.8;
  const cardWidth = "80%";
  const cardMargin = 10;

  const navigation = useNavigation();

  const onMenuPressed = () => {
    navigation.toggleDrawer();
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

        <View
          style={{
            height: "85%",
            width: "100%",
            marginTop: 25,
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Card
            style={{ width: cardWidth, height: "80%", margin: cardMargin }}
            Text="You are likely to have a heart disease"
          >
            <Image
              source={Failed}
              style={{ height: "80%", width: "80%", paddingTop: 10 }}
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
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: "8%",
    justifyContent: "space-between",
  },
});

export default HaveDiseaseScreen;
