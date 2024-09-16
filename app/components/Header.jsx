import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import RoundButton from "./RoundButton";
const dashboardIcon = require("../assets/header/dashboard.png");
const notificationIcon = require("../assets/header/notification.png");
const mapIcon = require("../assets/header/map.png");

const Header = () => {
  // UseState
  const [formattedDate, setFormattedDate] = useState();
  const [location, setLocation] = useState();

  const getFormattedDate = () => {
    // Using current time
    const options = {
      weekday: "long", // Thursday
      day: "2-digit", // 05
      month: "short", // Dec
      year: "2-digit", // 23
    };
    const date = new Date().toLocaleDateString("en-GB", options);
    return date;
  };

  //Left button action
  const handleLeftButtonPress = () => {
    console.log("Left button pressed");
  };

  //Right button action
  const handleRightButtonPress = () => {
    console.log("Right button pressed");
  };

  useEffect(() => {
    const time = getFormattedDate();
    setFormattedDate(time);

    // Todo : - setLocation
    setLocation("West Java, Bandung");
  }, []);

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
      <View style={styles.headerContent}>
        <Text style={styles.titleText}>{formattedDate}</Text>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 3 }}>
          <Image source={mapIcon} style={styles.navigationIcon} />
          <Text style={styles.secondaryText}>{location}</Text>
        </View>
      </View>

      {/* Right Button */}
      <RoundButton
        width={44}
        height={44}
        backgroundColor="#000000"
        onPress={handleRightButtonPress}
        borderColor="#ffffff"
        borderWidth={1}
        imageName={notificationIcon}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  HeaderView: {
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: "#080808",
    width: "100%",
    padding: 10,
  },

  roundButton: {
    width: 30,
    height: 30,
    backgroundColor: "#ffffff",
    borderRadius: 30,
  },

  headerContent: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    gap: 5,
  },

  titleText: {
    fontSize: 15,
    fontWeight: "500",
    color: "#fff",
  },

  secondaryText: {
    fontSize: 13,
    color: "#fff",
    fontWeight: "400",
    opacity: 0.6,
  },

  navigationIcon: {
    height: 10,
    width: 10,
    opacity: 0.6,
  },
});
