import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../components/Header";
import SearchWidget from "../components/SearchWidget";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.contentArea}>
        <View>
          <Text style={styles.largeTitleText}>Discover a new place.</Text>
          <Text style={styles.largeSecondaryText}>
            Explore, Journey, Discover & Adventure.
          </Text>
        </View>
        <SearchWidget />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#080808",
    alignItems: "center",
    justifyContent: "center",
  },
  contentArea: {
    flex: 1,
    width: "100%",
    padding: 20,
  },
  largeTitleText: {
    color: "#ffffff",
    fontSize: 28,
  },
  largeSecondaryText: {
    color: "#ffffff",
    fontSize: 15,
    opacity: 0.5,
  },
});
