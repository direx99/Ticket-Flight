import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

const userIcon = require("../assets/search/user.png");

const TextButton = ({ title, isSelected, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={isSelected ? styles.selectedButton : styles.deSelectedButton}
    >
      <Text style={isSelected ? styles.selectedText : styles.deSelectedText}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const PassengerCountButton = () => {
  return (
    <TouchableOpacity style={styles.passengerButton}>
      <Image source={userIcon} style={styles.passengerIcon} />
      <Text>4</Text>
    </TouchableOpacity>
  );
};

const SearchWidget = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonPress = (buttonTitle) => {
    setSelectedButton(buttonTitle);
  };

  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <TextButton
          title="One-way"
          isSelected={selectedButton === "One-way"}
          onPress={() => handleButtonPress("One-way")}
        />
        <TextButton
          title="Round trip"
          isSelected={selectedButton === "Round trip"}
          onPress={() => handleButtonPress("Round trip")}
        />
        <View style={{ flex: 1, alignItems: "flex-end" }}>
          <PassengerCountButton />
        </View>
      </View>
    </View>
  );
};

export default SearchWidget;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    alignContent: "center",
    alignItems: "center",
    borderRadius: 20,
    padding: 10,
  },

  selectedButton: {
    paddingHorizontal: 8,
    paddingVertical: 5,
    backgroundColor: "#E6E6E6",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#E6E6E6",
  },

  deSelectedButton: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: "#ffffff",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#E9ECF6",
  },

  topView: {
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 10,
  },

  deSelectedText: {
    color: "#8A98AC",
    fontSize: 15,
  },

  selectedText: {
    color: "#000000",
    fontSize: 15,
  },

  passengerIcon: {
    width: 16,
    height: 16,
  },

  passengerButton: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: "#ffffff",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#E9ECF6",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
});
