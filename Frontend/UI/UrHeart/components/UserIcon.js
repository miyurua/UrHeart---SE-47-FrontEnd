import React from "react";
import { View, StyleSheet, Image } from "react-native";

const UserIcon = (props) => {
  return (
    <View style={{ ...styles.iconContainer, ...props.style }}>
      <Image
        style={styles.logo}
        source={require("../assets/user/defaultUser.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    height: 80,
    width: 80,
  },
  iconContainer: {
    borderWidth: 2.5,
    borderColor: "gray",
    borderRadius: 100,
  },
});

export default UserIcon;
