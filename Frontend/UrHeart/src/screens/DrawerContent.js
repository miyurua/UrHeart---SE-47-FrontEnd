import React, {useState,useEffect} from "react";
import { View, StyleSheet } from "react-native";
import { Avatar, Drawer, Title, Caption } from "react-native-paper";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";

import AsyncStorage from '@react-native-async-storage/async-storage';

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const DrawerContent = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try{
      AsyncStorage.getItem('UserName')
        .then(Value => {
          if(Value != null){
            setUsername(Value);
          }
        })
    }catch (error){
      console.log(error);
    }
    try{
      AsyncStorage.getItem('Email')
        .then(Value => {
          if(Value != null){
            setEmail(Value);
          }
        })
    }catch (error){
      console.log(error);
    }
  }

  const navigation = useNavigation();

  const onSignOutPressed = async () => {
    try {
      await AsyncStorage.setItem("UserName", "");
    } catch (error) {
      console.log(error);
    }
    try {
      await AsyncStorage.setItem("Email", "");
    } catch (error) {
      console.log(error);
    }
    navigation.navigate("SignIn");
  };

  const onHomePressed = () => {
    props.navigation.navigate("MainHome");
  };

  const onProfilePressed = () => {
    props.navigation.navigate("Profile");
  };

  const onDoctorListPressed = () => {
    props.navigation.navigate("DoctorList");
  };

  const onHistoryPressed = () => {
    console.warn("History");
    // props.navigation.navigate("History");
  };

  const onSettingsPressed = () => {
    console.warn("Settings");
    // props.navigation.navigate("Settings");
  };

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View
              style={{
                flexDirection: "row",
                marginTop: 15,
              }}
            >
              <Avatar.Text label={username.substring(0, 2)} size={50} style={{backgroundColor:"black"}} />
              <View style={{ marginLeft: 15, flexDirection: "column" }}>
                <Title style={styles.title}>{username}</Title>
                <Caption style={styles.caption}>{email}</Caption>
              </View>
            </View>
          </View>
        </View>

        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            icon={({ color, size }) => (
              <Icon name="home-outline" color={color} size={size} />
            )}
            label="Home"
            onPress={onHomePressed}
          />
        </Drawer.Section>

        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            icon={({ color, size }) => (
              <Icon name="account-outline" color={color} size={size} />
            )}
            label="Profile"
            onPress={onProfilePressed}
          />
        </Drawer.Section>

        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            icon={({ color, size }) => (
              <Icon name="doctor" color={color} size={size} />
            )}
            label="Doctor List"
            onPress={onDoctorListPressed}
          />
        </Drawer.Section>

        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            icon={({ color, size }) => (
              <Icon name="history" color={color} size={size} />
            )}
            label="History"
            onPress={onHistoryPressed}
          />
        </Drawer.Section>

        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            icon={({ color, size }) => (
              <Icon name="cog-outline" color={color} size={size} />
            )}
            label="Settings"
            onPress={onSettingsPressed}
          />
        </Drawer.Section>
      </DrawerContentScrollView>

      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Sign Out"
          onPress={onSignOutPressed}
        />
      </Drawer.Section>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  drawerSection: {
    marginTop: 15,
    borderBottomColor: "#f4f4f4",
    borderBottomWidth: 1,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
});

export default DrawerContent;
