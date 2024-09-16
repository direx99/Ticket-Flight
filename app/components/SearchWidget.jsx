import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

const TextButton = ({ title, isSelected, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={isSelected ? styles.selectedButton : styles.deSelectedButton}
    >
      <Text>{title}</Text>
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
          <TextButton
            title="Multi-city"
            isSelected={selectedButton === "Multi-city"}
            onPress={{}}
          />
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
    paddingHorizontal: 5,
    paddingVertical: 4,
    backgroundColor: "red",
    borderRadius: 5,
  },

  deSelectedButton: {
    paddingHorizontal: 5,
    paddingVertical: 5,
    backgroundColor: "#E6E6E6",
    borderRadius: 5,
  },

  topView: {
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 10,
  },
});
