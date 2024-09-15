import { StyleSheet, Text, View } from "react-native";
import React from "react";
import RoundButton from "./RoundButton";
const dashboardIcon = require("../assets/dashboards.png");

const Header = () => {
  //Left button action
  const handleLeftButtonPress = () => {
    console.log("Left button pressed");
  };

  return (
    <View style={styles.HeaderView}>
      {/* Left button */}
      <RoundButton
        width={44}
        height={44}
        backgroundColor="#000000"
        onPress={handleLeftButtonPress}
        borderColor="#ffffff"
        borderWidth={1}
        imageName={dashboardIcon}
      />
      {/* Header Content */}
      {/* Right Button */}
      <RoundButton
        width={30}
        height={30}
        backgroundColor="#000000"
        onPress={handleLeftButtonPress}
        borderColor="#ffffff"
        borderWidth={1}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  HeaderView: {
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: "red",
    width: "100%",
    padding: 10,
  },

  roundButton: {
    width: 30,
    height: 30,
    backgroundColor: "#ffffff",
    borderRadius: 30,
  },
});
