import { Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const RoundButton = ({
  height = 30, // Default height is 30
  width = 30, // Default width is 30
  backgroundColor = "#ffffff", // Default color is #fffffff
  onPress = () => {}, // Default to an empty function
  borderColor = backgroundColor, // Get the background color as default border color
  borderWidth = 0, // 0 is default border with - No border
  imageName = null, // Image name
}) => {
  console.log(imageName);

  return (
    <TouchableOpacity
      style={[
        styles.btnContainer,
        {
          height,
          width,
          backgroundColor,
          borderRadius: width / 2,
          borderColor,
          borderWidth,
        },
      ]}
      onPress={onPress}
    >
      {imageName && (
        <Image
          style={{ width: width * 0.4, height: width * 0.4 }}
          source={imageName}
        ></Image>
      )}
    </TouchableOpacity>
  );
};

export default RoundButton;

const styles = StyleSheet.create({
  btnContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
