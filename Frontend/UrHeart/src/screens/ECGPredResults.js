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
import { useNavigation, useRoute } from "@react-navigation/native";

import Card from "../components/Card";
import MENU from "../../assets/images/menu.png";
import AdaLOGO from "../../assets/images/adaptive-logo.png";
import Success from "../../assets/images/success.png";
import Failed from "../../assets/images/failed.png";

const ECGPredResults = () => {
  const { height } = useWindowDimensions();
  const cardHeight = height * 0.8;
  const cardWidth = "80%";
  const cardMargin = 10;

  const navigation = useNavigation();
  const route = useRoute();

  const onMenuPressed = () => {
    navigation.toggleDrawer();
  };

  let imagedecript;
  let imageRes;
  if (route.params.predResult.output == "Normal") {
    imageRes = (
      <Image
        source={Success}
        style={{ height: "100%", width: "100%", paddingTop: 10 }}
        resizeMode="contain"
      />
    );
    imagedecript = "You are not likely to have a heart disease";
  }
  if (route.params.predResult.output == "HB") {
    imageRes = (
      <Image
        source={Failed}
        style={{ height: "100%", width: "100%", paddingTop: 10 }}
        resizeMode="contain"
      />
    );
    imagedecript = "You are likely to have an abnormal heartbeat";
  }
  if (route.params.predResult.output == "MI") {
    imageRes = (
      <Image
        source={Failed}
        style={{ height: "100%", width: "100%", paddingTop: 10 }}
        resizeMode="contain"
      />
    );
    imagedecript = "You are likely to have a Myocardial infaraction";
  }
  if (route.params.predResult.output == "PMI") {
    imageRes = (
      <Image
        source={Failed}
        style={{ height: "100%", width: "100%", paddingTop: 10 }}
        resizeMode="contain"
      />
    );
    imagedecript = "You are likely to have a history in Myocardial infaraction";
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
            Text={ imagedecript }
            textstyle={{ fontSize: 25 }}
          >
            {imageRes}
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

export default ECGPredResults;
