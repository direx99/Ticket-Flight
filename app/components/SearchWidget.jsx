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

const SelectionButton = ({ title, value }) => {
  return (
    <TouchableOpacity style={styles.selectionButton}>
      <Text numberOfLines={1} style={styles.smallLightText}>
        {title}
      </Text>
      <Text numberOfLines={1} style={styles.regularText}>
        {value}
      </Text>
    </TouchableOpacity>
  );
};

const SearchWidget = () => {
  const [selectedButton, setSelectedButton] = useState("One-way");

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
      <View style={{ width: "100%", gap: 10 }}>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <SelectionButton title={"From"} value={"West Java, Bandung"} />
          <SelectionButton title={"To"} value={"Berlin, German"} />
        </View>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <SelectionButton title={"Departure"} value={"March 06"} />
          <SelectionButton title={"Return"} value={"March 16"} />
        </View>
        <TouchableOpacity style={styles.searchButton}>
          <Text style={styles.searchText}>Search</Text>
        </TouchableOpacity>
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
    marginTop: 20,
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
    paddingVertical: 5,
    backgroundColor: "#ffffff",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#E9ECF6",
  },

  topView: {
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 10,
    marginBottom: 15,
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

  searchButton: {
    backgroundColor: "#000000",
    width: "100%",
    alignItems: "center",
    borderRadius: 15,
    marginTop: 15,
  },
  searchText: {
    color: "#ffffff",
    paddingVertical: 12,
    fontSize: 17,
    fontWeight: "600",
  },
  selectionButton: {
    backgroundColor: "#F8F9FD",
    flex: 1,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  smallLightText: {
    color: "#000000",
    opacity: 0.3,
    fontSize: 14,
  },

  regularText: {
    color: "#000000",
    opacity: 0.7,
    fontSize: 15,
  },
});
