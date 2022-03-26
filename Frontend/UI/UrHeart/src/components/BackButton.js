import React from "react";
import { Image, TouchableOpacity, StyleSheet } from "react-native";
import BACK from "../../assets/images/BackArrow.png";

const BackButton = (props) => {

  // delete this comment
  return (
    <TouchableOpacity
      {...props}
    >
      <Image source={BACK} style={{...props.style}} resizeMode="contain" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  
});

export default BackButton;