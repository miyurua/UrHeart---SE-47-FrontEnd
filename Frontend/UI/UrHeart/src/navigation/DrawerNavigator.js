import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen";
import DrawerContent from "../screens/DrawerContent";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />} screenOptions={{headerShown: false}} >
      <Drawer.Screen name="Profile" component={HomeScreen} />
      <Drawer.Screen name="DoctorList" component={HomeScreen} />
      <Drawer.Screen name="History" component={HomeScreen} />
      <Drawer.Screen name="Settings" component={HomeScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
