import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import DoctorListScreen from "../screens/DoctorListScreen";
import ProfileScreen from "../screens/ProfileScreen";
import HomeScreen from "../screens/HomeScreen";
import DrawerContent from "../screens/DrawerContent";

const Drawer = createDrawerNavigator();

const config = {
  animation: "spring",
  config: {
    stiffness: 1000,
    damping: 50,
    mass: 3,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const screenOptionStyle = {
  headerShown: false,
  gestureEnabled: true,
  gestureDirection: "horizontal",
  transitionSpec: { open: config, close: config },
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={screenOptionStyle}
      initialRouteName="MainHome"
    >
      <Drawer.Screen name="MainHome" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="DoctorList" component={DoctorListScreen} />
      <Drawer.Screen name="History" component={HomeScreen} />
      <Drawer.Screen name="Settings" component={HomeScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
