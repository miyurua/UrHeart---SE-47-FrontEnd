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
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import Card from "../components/Card";
import MENU from "../../assets/images/menu.png";
import AdaLOGO from "../../assets/images/adaptive-logo.png";

const HelpScreen = () => {
  const { height } = useWindowDimensions();
  const cardHeight = height * 0.5;
  const cardWidth = "80%";
  const cardMargin = 20;

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

        <ScrollView style={{ height: "85%", width: "100%", marginTop: 25 }}>
          <View style={{ width: "100%", alignItems: "center" }}>
            <Card
              style={{
                width: cardWidth,
                height: 400,
                margin: cardMargin,
              }}
              Text="How to use manual data prediction"
              textstyle={{ fontSize: 18 }}
              headerHeight={{ height: "20%" }}
              footerHeight={{ height: "80%" }}
            >
              <ScrollView style={{ height: "100%", width: "100%" }}>
                <View style={{ width: "100%", paddingLeft: 10 }}>
                  <View style={styles.textallignment}>
                    <Text style={styles.textDecorator}>
                      Step 1 : Select the "Predict with manual data" option from
                      the home screen
                    </Text>
                  </View>
                  <View style={styles.textallignment}>
                    <Text style={styles.textDecorator}>
                      Step 2 : Insert your data for prediction
                    </Text>
                  </View>
                  <View style={styles.textallignment}>
                    <Text style={styles.textDecorator}>
                      Step 3 : Press the "Process data" button
                    </Text>
                  </View>
                  <View style={styles.textallignment}>
                  <Text style={styles.textDecorator}>
                    Step 4 : Check your result
                  </Text>
                </View>
                </View>
              </ScrollView>
            </Card>
            <Card
              style={{
                width: cardWidth,
                height: 560,
                margin: cardMargin,
              }}
              Text="How to use ECG prediction"
              textstyle={{ fontSize: 18 }}
              headerHeight={{ height: "15%" }}
              footerHeight={{ height: "85%" }}
            >
              <ScrollView style={{ height: "100%", width: "100%" }}>
                <View style={{ width: "100%", paddingLeft: 10 }}>
                  <View style={styles.textallignment}>
                    <Text style={styles.textDecorator}>
                      Step 1 : Select the "Predict with ECG" option from the
                      home screen
                    </Text>
                  </View>
                  <View style={styles.textallignment}>
                    <Text style={styles.textDecorator}>
                      Step 2 : Press the "Pick a photo" button
                    </Text>
                  </View>
                  <View style={styles.textallignment}>
                    <Text style={styles.textDecorator}>
                      Step 3 : Allow the app to access your media on phone
                    </Text>
                  </View>
                  <View style={styles.textallignment}>
                    <Text style={styles.textDecorator}>
                      Step 4 : Select the ECG image you need to ckeck
                    </Text>
                  </View>
                  <View style={styles.textallignment}>
                    <Text style={styles.textDecorator}>
                      Step 5 : Then press the "Process image" button
                    </Text>
                  </View>
                  <View style={styles.textallignment}>
                    <Text style={styles.textDecorator}>
                      Step 6 : Check your result
                    </Text>
                  </View>
                </View>
              </ScrollView>
            </Card>
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
  textDecorator: {
    fontSize: 17,
    color: "#000000",
    textAlign: "left",
    fontWeight: "500",
  },
  textallignment: { paddingTop: 25, width: "90%", alignItems: "flex-start" },
});

export default HelpScreen;
