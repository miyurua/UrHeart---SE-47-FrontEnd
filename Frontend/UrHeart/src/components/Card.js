import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";

const Card = (props) => {
  return (
    <Pressable onPress={props.onPress} style={{ ...styles.card, ...props.style }}>
      <View style={{...styles.header, ...props.headerHeight}}>
          <Text style={{...styles.textDecorator, ...props.textstyle}}>{props.Text}</Text>
        </View>
        <View style={{...styles.footer, ...props.footerHeight}}>{props.children}</View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: "white",
    elevation: 8,
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 10,
  },
  header: {
    paddingHorizontal: 7,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "30%",
  },
  footer: {
    marginTop: -20,
    paddingHorizontal: 5,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "70%",
  },
  textDecorator: {
    fontSize: 17,
    color: "#051C60",
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default Card;
