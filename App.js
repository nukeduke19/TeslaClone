import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import CarsList from "./app/components/CarList/CarsList";
import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <SafeAreaView style={styles.screen}>
      <CarsList />
      <StatusBar style="light" backgroundColor="black" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
  },
});
