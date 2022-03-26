import React from "react";
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

const DoctorListScreen = () => {
  const { height } = useWindowDimensions();
  const cardHeight = height * 0.12;
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

        <ScrollView style={{height: height * 0.889, width: '100%', marginTop: 25}}>
          <View style={{width: '100%', alignItems: 'center'}}>
            <Card style={{ width: cardWidth, height: cardHeight, margin: cardMargin }}></Card>
            <Card style={{ width: cardWidth, height: cardHeight, margin: cardMargin }}></Card>
            <Card style={{ width: cardWidth, height: cardHeight, margin: cardMargin }}></Card>
            <Card style={{ width: cardWidth, height: cardHeight, margin: cardMargin }}></Card>
            <Card style={{ width: cardWidth, height: cardHeight, margin: cardMargin }}></Card>
            <Card style={{ width: cardWidth, height: cardHeight, margin: cardMargin }}></Card>
            <Card style={{ width: cardWidth, height: cardHeight, margin: cardMargin }}></Card>
            <Card style={{ width: cardWidth, height: cardHeight, margin: cardMargin }}></Card>
            <Card style={{ width: cardWidth, height: cardHeight, margin: cardMargin }}></Card>
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
