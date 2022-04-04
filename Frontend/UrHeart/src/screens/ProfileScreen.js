import React, { useState, useEffect } from "react";
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
import { Avatar, Title, Caption } from "react-native-paper";

import AsyncStorage from "@react-native-async-storage/async-storage";

import MENU from "../../assets/images/menu.png";
import AdaLOGO from "../../assets/images/adaptive-logo.png";

const ProfileScreen = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      AsyncStorage.getItem("UserName").then((Value) => {
        if (Value != null) {
          setUsername(Value);
        }
      });
    } catch (error) {
      console.log(error);
    }
    try {
      AsyncStorage.getItem("Email").then((Value) => {
        if (Value != null) {
          setEmail(Value);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const { height } = useWindowDimensions();
  const avatarSize = height * 0.12;
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

        <View style={{ height: "89%", width: "100%", marginTop: 25 }}>
          <View
            style={{
              width: "100%",
              marginLeft: "9%",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Avatar.Text
              label={username.substring(0, 2)}
              size={80}
              style={{ backgroundColor: "black" }}
            />
            <View
              style={{
                marginLeft: 25,
                flexDirection: "column",
              }}
            >
              <Title style={styles.title}>{username}</Title>
              <Caption style={styles.caption}>{email}</Caption>
            </View>
          </View>
          <View style={{ flex: 1, marginTop: 30 }}>
            <ScrollView>
              
            </ScrollView>
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
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
  caption: {
    marginTop: 3,
    fontSize: 16,
    lineHeight: 16,
    fontWeight: "bold",
  },
});

export default ProfileScreen;
